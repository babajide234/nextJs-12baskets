import { useState,useEffect } from 'react';
import { 
    Grid,
    Link,
    Card,
    Typography,
    CardHeader,
    Modal,
    Box,
    Paper,
} from '@mui/material/'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';


import {useProductsSlice} from 'src/@core/store/productSlice';
import {useUserStore} from 'src/@core/store/userStore';
import ProductsTable from 'src/views/products/productsTable';
import AddProductForm from 'src/views/products/AddProductForm';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import ClearIcon from '@mui/icons-material/Clear';
import { AlertStore } from 'src/@core/store/alertSlice';
import { instance } from 'src/@core/hooks/service';



const Products = () => {

    const token = useUserStore((state)=> state.user)
    
    const add = useProductsSlice((state)=> state.add )
    const edit = useProductsSlice((state)=> state.edit )
    const setAdd = useProductsSlice((state)=> state.setAdd )
    const setProducts = useProductsSlice((state)=> state.setProducts )
    const uploadProductCsv = useProductsSlice((state)=> state.uploadProductCsv )

    const setMessage = AlertStore((state)=> state.setMessage )
    const setStatus = AlertStore((state)=> state.setStatus )
    const setType = AlertStore((state)=> state.setType )
    
    const [uploadStatus, setUploadStatus] = useState(null);
    const [currentFile, setCurrentFile] = useState(null);
    const [uploadProgress, setUploadProgress] = useState(0);

    const style = {
        position:"absolute",
        top:"50%",
        left:"50%",
        transform: "translate(-50%,-50%)",
        width:600,
        minHeight:100,
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#fff",
        borderRadius: "10px",
        paddingBlock: 20,
        paddingInline: 20
    }

    useEffect(() => {
        const data ={
            token: token,
            id: "",
            store_id: "",
            category_id: "",
            sub_category_id: "",
            location: "",
            store: "",
            orderBy: "",
            active: ""
        }
        setProducts(data);
    }, [token,setProducts])

    const handleClose = () =>{
        if( add ){
            setAdd(!add)
        }
        if(edit){
            setEdit(!edit);
        }
    }


    const handleFileSelect = (event) => {
      setCurrentFile(event.target.files[0]);
    };

    const handleUpload = async () => {
        const formData = new FormData();
        formData.append('token', token);
        formData.append('file', currentFile);
    
        try {
          const response = await instance.post('misc/file-upload', formData, {
              headers: {
                  "Content-Type": "multipart/form-data",
              },
              onUploadProgress: (progressEvent) => {
                  const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
                  setUploadProgress(percentCompleted);
              },
          });
          
          console.log(response);
          
          if(response.data.status == "success"){
              
            const res = await instance.post('store/upload-products',{
                  token:token,
                  store_id:"",
                  file_url:response.data.file_url
            })
            
            console.log(response);

            if(res.data.status == "success"){
                setFileUrl(res.data.file_url)
                setUploadStatus('success');
                setMessage(res.data.message);
                setStatus(true);
                setType('success');
                setCurrentFile(null);
                
                const data ={
                    token: token,
                    id: "",
                    store_id: "",
                    category_id: "",
                    sub_category_id: "",
                    location: "",
                    store: "",
                    orderBy: "",
                    active: ""
                }
                setProducts(data);
            }
          }else{
              setUploadStatus('failed');
              setMessage(response.data.message);
              setStatus(true);
              setType('error');
          }
  
          // Do something with the response data if needed
  
        } catch (error) {
          console.error(error);
          setUploadStatus('failed');
  
          // Handle error if needed
        }
    };
    
    return (
        <Grid container spacing={6} >
        <Grid item xs={12} sx={{ display:"flex", justifyContent: "space-between"}}>
            <Typography variant='h5'>
                Products
            </Typography>
            <Stack spacing={5} direction="row">
                <Button variant="contained" onClick={ ()=> setAdd(!add) }>Add New Product</Button>
                <Button variant="contained" component="label" >
                    Upload Csv
                    <input hidden onChange={handleFileSelect} multiple type="file" />
                    {currentFile && (
                        <Box ml={4}>
                            <CircularProgress variant="determinate"  size={20} color='inherit' value={uploadProgress} />
                        </Box>
                    )}
                </Button>
                {currentFile && (
                    <>
                        <Button variant="outlined"  onClick={handleUpload}><UploadFileIcon/></Button>
                        <Button variant="outlined" color="error" onClick={()=>setCurrentFile(null)}><ClearIcon/></Button>
                    </>
                )}
            </Stack>
        </Grid>
        <Grid item xs={12}>
            <Card>
                <CardHeader title='Products Table' titleTypographyProps={{ variant: 'h6' }} />
                <ProductsTable/>
                
                <Modal
                    className={''}
                    open={add}
                    onClose={handleClose}
                >
                    <Box sx={style}>
                       <AddProductForm/>
                    </Box>
                </Modal>
            </Card>
        </Grid>
    </Grid>
    );
}

export default Products;
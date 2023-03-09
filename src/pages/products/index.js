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
import Button from '@mui/material/Button';
import useProductsSlice from 'src/@core/store/productSlice';
import useUserStore from 'src/@core/store/userStore';
import ProductsTable from 'src/views/products/productsTable';
import AddProductForm from 'src/views/products/AddProductForm';


const Products = () => {

    const token = useUserStore((state)=> state.user)
    const add = useProductsSlice((state)=> state.add )
    const edit = useProductsSlice((state)=> state.edit )
    const setAdd = useProductsSlice((state)=> state.setAdd )
    const setProducts = useProductsSlice((state)=> state.setProducts )

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

    return (
        <Grid container spacing={6} >
        <Grid item xs={12} sx={{ display:"flex", justifyContent: "space-between"}}>
            <Typography variant='h5'>
                Products
            </Typography>
            <Button variant="contained" onClick={ ()=> setAdd(!add) }>Add New Product</Button>
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
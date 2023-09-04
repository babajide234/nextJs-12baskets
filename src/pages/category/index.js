import { useState,useEffect,useRef } from 'react';
import { 
    Grid,
    Card,
    Typography,
    CardHeader,
    Modal,
    Box,
    Paper,
    Button,
    Stack
} from '@mui/material/'
import AddCategooryForm from 'src/views/category/AddCategooryForm';
import { useProductsSlice } from 'src/@core/store/productSlice';
import CategoryTable from 'src/views/category/CategoryTable';
import useSWR from 'swr'
import { useUserStore } from 'src/@core/store/userStore';
import SubCategoryTable from 'src/views/category/SubCategoryTable';
import AddSubCat from 'src/views/category/AddSubCat';
import EditCat from 'src/views/category/EditCat';



const Category = () => {
    
    const token = useUserStore((state) => state.user);
    
    const [ subcat, setSubcat] = useState(false)

    const add = useProductsSlice((state)=> state.add )
    const edit = useProductsSlice((state)=> state.edit )
    const setAdd = useProductsSlice((state)=> state.setAdd )
    const setEdit = useProductsSlice((state)=> state.setEdit )
    const setCategories = useProductsSlice((state)=> state.setCategories )

    const payload = {
        token: token,
        category_name: ""
    };

    const { data, error, isLoading  } = useSWR('/api/log', setCategories(payload))

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

    const Boxstyle = {
        position:"absolute",
        top:"50%",
        left:"50%",
        transform: "translate(-50%,-50%)",
        width:600,
        height:"80vh",
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#fff",
        borderRadius: "10px",
        paddingTop: 45,
        paddingInline: 15,
        overflowY:"auto",
        msOverflowStyle: 'none',
        '&::-webkit-scrollbar': {
            width: '8px', 
        },
        '&::-webkit-scrollbar-thumb': {
            backgroundColor: '#640501', 
            borderRadius: '4px', 
        },
        '&::-webkit-scrollbar-thumb:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.4)', 
        },
        '&::-webkit-scrollbar-track': {
            backgroundColor: '#fff', 
            borderRadius: '4px', 
        }
    }


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
                    Teams
                </Typography>
                <Stack  direction="row" spacing={2}>
                    <Button variant="contained" onClick={ ()=> setAdd(!add) }>Add New Category</Button>
                    <Button variant="contained" onClick={ ()=> setSubcat(!subcat) }>New SubCategory</Button>
                </Stack>

            </Grid>
            <Grid item xs={6}>
                <Card>
                    <CardHeader title='Categories Table' titleTypographyProps={{ variant: 'h6' }} />
                    <CategoryTable/>
                </Card>

                <Modal
                        className={''}
                        open={add}
                        onClose={handleClose}
                    >
                        <Box sx={style}>
                            <AddCategooryForm/>
                        </Box>
                </Modal>
                <Modal
                        className={''}
                        open={edit}
                        onClose={handleClose}
                    >
                        <Box sx={style}>
                            <EditCat/>
                        </Box>
                </Modal>
            </Grid>
            <Grid item xs={6}>
                <Card>
                    <CardHeader title='SubCategories Table' titleTypographyProps={{ variant: 'h6' }} />
                    <SubCategoryTable/>
                </Card>

                <Modal
                        className={''}
                        open={subcat}
                        onClose={ ()=> setSubcat(!subcat) }
                    >
                        <Box sx={style}>
                            <AddSubCat/>
                        </Box>
                </Modal>
            </Grid>
        </Grid>
    );
}

export default Category;
import { useState, useEffect } from 'react';
import { 
    Grid,
    TextField,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Typography,
    Button
} from '@mui/material/'

import {useUserStore} from 'src/@core/store/userStore';
import {useStoreSlice} from 'src/@core/store/storeSlice';



import { Formik } from 'formik';
import { useProductsSlice } from 'src/@core/store/productSlice';
import useSWR from 'swr'
import { instance } from 'src/@core/hooks/service';
import { LoadingButton } from '@mui/lab';




const EditCat = () => {

    const token  = useUserStore( (state) => state.user)
    const editCategory  = useProductsSlice( (state) => state.editCategory)
    const cat_id = useProductsSlice((state)=> state.cat_id);
    const categories = useProductsSlice((state)=> state.categories);
    const loading = useProductsSlice((state)=> state.loading);

    const cat = categories.filter((item) => item.category_id === cat_id )

    console.log(cat);

    const initialValues = {
        name: cat ? cat[0].category_name : ''
    };

    // const payload = {
    //     token: token,
    //     category_name: cart_id,
    // };

    // const { data, error, isLoading  } = useSWR('/api/log', ()=>{
    //     const res = instance.post('/store/category',payload);
        
    //     return res.data;
    // })

    const handleSubmit = (values) =>{

        const data = {
            token: token,
            category_id: cat_id,
            category_name: values.name,
            active: "" 
        }
        editCategory(data)
    }

    return (
        <Formik initialValues={initialValues} enableReinitialize={true} onSubmit={handleSubmit}>
        {({values, handleSubmit,handleChange}) => (
            <form onSubmit={handleSubmit}>
                <Grid container spacing={7}>
                    <Grid item xs={12} sm={12}>
                        <Typography variant='h5' sx={{ marginBottom: 2 }}>Edit Category</Typography>
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <TextField 
                            fullWidth 
                            label='Category Name' 
                            name="name" 
                            placeholder='Category name'  
                            value={values.name} 
                            onChange={handleChange} 
                        />
                    </Grid>
                    <Grid item xs={12} >
                        <LoadingButton
                            variant='contained' 
                            loading={loading}
                            type='submit'
                            sx={{ float:"right"}}
                        >Update</LoadingButton>
                    </Grid>
                </Grid>
            </form>
        )}
        </Formik>
    );
}

export default EditCat;
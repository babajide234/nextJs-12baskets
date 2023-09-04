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


const AddCategooryForm = () => {
    const token  = useUserStore( (state) => state.user)
    const addCategory  = useProductsSlice( (state) => state.addCategory)

    const initialValues = {
        name: ""
    };

    const handleSubmit = (values) =>{

        const data = {
            token: token,
            category_name: values.name
        }
        addCategory(data)
    }

    return (
        <Formik initialValues={initialValues} enableReinitialize={true} onSubmit={handleSubmit}>
        {({values, handleSubmit,handleChange}) => (
            <form onSubmit={handleSubmit}>
                <Grid container spacing={7}>
                    <Grid item xs={12} sm={12}>
                        <Typography variant='h5' sx={{ marginBottom: 2 }}>Add Category</Typography>
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <TextField fullWidth label='Category Name' name="name" placeholder='Category name'  value={values.name} onChange={handleChange} />
                    </Grid>
                    <Grid item xs={12} >
                        <Button variant='contained' type='submit' sx={{ float:"right"}}>Create</Button>
                    </Grid>
                </Grid>
            </form>
        )}
        </Formik>
    );
}

export default AddCategooryForm;
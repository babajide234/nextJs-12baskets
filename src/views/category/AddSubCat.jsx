import { useState, useEffect } from 'react';
import { 
    Grid,
    TextField,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Typography,
    Button,
} from '@mui/material/'

import {useUserStore} from 'src/@core/store/userStore';
import {useStoreSlice} from 'src/@core/store/storeSlice';

import { Formik } from 'formik';
import { useProductsSlice } from 'src/@core/store/productSlice';
import SelectInput from "@mui/material/Select";
import { LoadingButton } from '@mui/lab';

const AddSubCat = () => {
    const token  = useUserStore( (state) => state.user)
    const addSubCategory  = useProductsSlice( (state) => state.addSubCategory)
    const categories = useProductsSlice((state)=> state.categories);
    const loading = useProductsSlice((state)=> state.loading);

    const initialValues = {
        name: "",
        category_id:""
    };

    const handleSubmit = (values) =>{

        const data ={
            token: token,
            category_id: values.category_id,
            sub_category_name: values.name
        }
        addSubCategory(data)
    }

    return (
        
        <Formik initialValues={initialValues} enableReinitialize={true} onSubmit={handleSubmit}>
        {({values, handleSubmit,handleChange}) => (
            <form onSubmit={handleSubmit}>
                <Grid container spacing={7}>
                    <Grid item xs={12} sm={12}>
                        <Typography variant='h5' sx={{ marginBottom: 2 }}>Add Subcategory</Typography>
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <FormControl fullWidth >
                            <InputLabel>Select Category</InputLabel>
                            <SelectInput
                                name="category_id"
                                as={Select}
                                label="Select Category"
                                value={values.category_id}
                                onChange={handleChange}
                            >
                            <MenuItem >Select Category</MenuItem>

                            {
                                categories?.map( (item) => (
                                    <MenuItem key={item.category_id} value={item.category_id}>{item.category_name}</MenuItem>
                                ))
                            }
                            </SelectInput>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <TextField 
                            fullWidth 
                            label='SubCategory Name' 
                            name="name" 
                            placeholder='SubCategory name'  
                            value={values.name} 
                            onChange={handleChange} 
                        />
                    </Grid>
                    <Grid item xs={12} >
                        {/* <Button variant='contained' type='submit' sx={{ float:"right"}}>Create</Button> */}
                        <LoadingButton
                            variant='contained' 
                            type='submit' 
                            loading={loading}
                            sx={{ float:"right"}}
                        >
                            Create
                        </LoadingButton>
                    </Grid>
                </Grid>
            </form>
        )}
        </Formik>
    );
}

export default AddSubCat;
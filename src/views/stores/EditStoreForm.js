import React , { useState } from 'react'

import { 
    Grid, 
    TextField ,
    Button,
    Box,
    withStyles,
    Typography,
    LinearProgress
} from "@mui/material";
import { useStoreSlice } from 'src/@core/store/storeSlice';
import { useUserStore } from 'src/@core/store/userStore';
import { Formik } from 'formik';
import FileUploader from 'src/@core/components/FileUploader';
import { uploadStore } from 'src/@core/store/uploadSlice';


const EditStoreForm = () => {
    const token = useUserStore(state => state.user)
    const stores = useStoreSlice(state => state.stores);
    const storeId = useStoreSlice(state => state.storeId);
    const editStore = useStoreSlice(state => state.editStore);
    const loading = useStoreSlice(state => state.loading);

    const file_url = uploadStore(state=> state.file_url)
    
    const storeData= stores.filter((item) =>  item.store_id == storeId)[0];

    const initialValues = {
        store_id: storeId,
        name: storeData.name,
        address: storeData.address,
        description: storeData.description,
        photo: file_url
    };

    const handleSubmit =(values)=>{
        const data = {
            token:token,
            store_id: storeId,
            name: values.name,
            address: values.address,
            description: values.description,
            photo: file_url
        };

        editStore(data);
    }
    
    return (
        <Formik initialValues={initialValues} enableReinitialize={true} onSubmit={handleSubmit}>
            {({values, handleSubmit,handleChange}) => (
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={7}>
                       <Grid item xs={12} sm={12}>
                           <TextField fullWidth label='name' name='name' value={values.name} defaultValue={values.name}  placeholder='johnDoe' onChange={handleChange}  />
                       </Grid>
                       <Grid item xs={12} sm={12}>
                           <TextField multiline minRows={3} name='description' value={values.description} defaultValue={values.description}  fullWidth label='Description' onChange={handleChange} placeholder='Description' />
                       </Grid>
                       <Grid item xs={12} sm={12}>
                           <TextField multiline minRows={3} name="address" value={values.address} defaultValue={values.address}  fullWidth label='Address' onChange={handleChange} placeholder='Address'  />
                       </Grid>
       
                        <FileUploader/>

                       <Grid item xs={12} >
                           <Button 
                            variant='contained' 
                            type='submit' 
                            sx={{ float:"right"}} 

                            // disabled={ file_url == "" ? true : false }
                        >
                           Update Store
                        </Button>
                       </Grid>
                    </Grid>
               </form>
            )}
        </Formik>

    );
}

export default EditStoreForm;
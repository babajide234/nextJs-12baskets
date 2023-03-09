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

import useUserStore from 'src/@core/store/userStore';
import useStoreSlice from 'src/@core/store/storeSlice';

const AddStoresForm = () => {

    const addStore = useStoreSlice( (state)=> state.addStore);
    const token  = useUserStore( (state) => state.user)

    const [ email, setEmail ] = useState('');
    const [ phone, setPhone ] = useState('');
    const [ name, setName ] = useState('');
    const [ address, setAddress ] = useState('');

    const check = (value) =>{

        return value == '';
    }

    const handleChange = (value)=>{
        setForm({ ...form, value})
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        
        if( check(email) || check(name) || check(phone) || check(address) ){

            return
        }

        const data = {
            token,
            name,
            phone,
            email,
            address
        }

        addStore(data)
    }

    return (
        <form onSubmit={handleSubmit}>
        <Grid container spacing={7}>
            <Grid item xs={12} sm={12}>
                <Typography variant='h5' sx={{ marginBottom: 2 }}>Add Team Member</Typography>
            </Grid>
            <Grid item xs={12} sm={12}>
                <TextField fullWidth label='Name' placeholder='name'  value={name} onChange={(e)=> setName(e.target.value)} />
            </Grid>
            <Grid item xs={12} sm={12}>
                <TextField fullWidth label='Contact Details' placeholder='Contact Details'  value={phone} onChange={(e)=> setPhone(e.target.value)} />
            </Grid>
            <Grid item xs={12} sm={12}>
                <TextField fullWidth label='Email' placeholder='email'  value={email} onChange={(e)=> setEmail(e.target.value)} />
            </Grid>
            <Grid item xs={12} sm={12}>
                <TextField multiline minRows={4} fullWidth label='Address' placeholder='address'  value={address} onChange={(e)=> setAddress(e.target.value)} />
            </Grid>

            <Grid item xs={12} >
                <Button variant='contained' type='submit' sx={{ float:"right"}}>
                   Save
                </Button>
            </Grid>
         </Grid>
    </form>
    );
}

export default AddStoresForm;
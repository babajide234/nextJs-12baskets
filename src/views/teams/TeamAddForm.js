import { useState,useEffect } from 'react';
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
import {useTeamSlice} from 'src/@core/store/teamStore';
import {useUserStore} from 'src/@core/store/userStore';
import { useStoreSlice } from 'src/@core/store/storeSlice';

const TeamAddForm = () => {
    const addTeam = useTeamSlice( (state)=> state.addTeam);
    const token  = useUserStore( (state) => state.user)
    const setStore = useStoreSlice((state)=> state.setStore )
    const stores = useStoreSlice(state => state.stores);

    useEffect(() => {
        const data ={
            token: token,
            store_id: "",
            location: "",
            store: "",
            page: "",
            limit: ""
        }
        setStore(data);
    }, [token,setStore])

    useEffect(() => {
        console.log(stores)
    }, [stores])

    // const setAdd = useTeamSlice((state)=> state.setAdd);

    const [ email, setEmail ] = useState('');
    const [ role, setRole ] = useState('');
    const [ store_id, setStoreId ] = useState('');

    const check = (value) =>{

        return value == '';
    }

    const handleChange = (value)=>{
        setForm({ ...form, value})
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        
        if( check(email) || check(role) ){
            return
        }

        const data = {
            token,
            store_id,
            email,
            role,
        }

        addTeam(data)
    }

    return (
        <form onSubmit={handleSubmit}>
            <Grid container spacing={7}>
                <Grid item xs={12} sm={12}>
                    <Typography variant='h5' sx={{ marginBottom: 2 }}>Add Team Member</Typography>
                </Grid>
                <Grid item xs={12} sm={12}>
                    <TextField fullWidth label='Email' placeholder='email'  value={email} onChange={(e)=> setEmail(e.target.value)} />
                </Grid>
                <Grid item xs={12} sm={12}>
                    <FormControl fullWidth>
                        <InputLabel>Role</InputLabel>
                        <Select label='Role' value={role} onChange={(e)=> setRole(e.target.value)}  >
                            <MenuItem value='admin'>Admin</MenuItem>
                            <MenuItem value='rider'>Rider</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={12}>
                    <FormControl fullWidth>
                        <InputLabel>Store</InputLabel>
                        <Select label='Store' value={store_id} onChange={(e)=> setStoreId(e.target.value)}  >
                            {
                                stores?.map((item)=>(
                                    <MenuItem key={item.store_id} value={item.store_id}>{item.name}</MenuItem>
                                ))
                            }
                            <MenuItem value='rider'>Rider</MenuItem>
                        </Select>
                    </FormControl>
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

export default TeamAddForm;
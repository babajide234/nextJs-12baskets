import { useState } from 'react';
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
import useTeamSlice from 'src/@core/store/teamStore';
import useUserStore from 'src/@core/store/userStore';

const TeamAddForm = () => {
    const addTeam = useTeamSlice( (state)=> state.addTeam);
    const token  = useUserStore( (state) => state.user)

    // const setAdd = useTeamSlice((state)=> state.setAdd);


    const [ email, setEmail ] = useState('');
    const [ role, setRole ] = useState('');
    const [ type, setType ] = useState('');
    const [ rate, setRate ] = useState('');
    const [ capped, setCapped ] = useState('');

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
            email,
            role,
            type,
            rate,
            capped
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
                {
                    role == 'rider' && (
                        <>
                            <Grid item xs={12} sm={12}>
                                <FormControl fullWidth>
                                    <InputLabel>Type</InputLabel>
                                    <Select label='Type' value={type} onChange={(e)=> setType(e.target.value)}  >
                                        <MenuItem value='admin'>Admin</MenuItem>
                                        <MenuItem value='rider'>Rider</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={12}>
                                <TextField fullWidth label='Rate' value={rate} onChange={(e)=> setRate(e.target.value)} />
                            </Grid>
                            <Grid item xs={12} sm={12}>
                                <TextField fullWidth label='Capped' value={capped} onChange={(e)=> setCapped(e.target.value)} />
                            </Grid>
                        </>
                    )
                }
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
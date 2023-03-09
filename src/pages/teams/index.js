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

import TeamsTable from 'src/views/teams/TeamsTable';
import TeamEditForm from 'src/views/teams/TeamEditForm';
import TeamAddForm from 'src/views/teams/TeamAddForm';

import useTeamSlice from 'src/@core/store/teamStore';
import useUserStore from 'src/@core/store/userStore';

const Teams = (params) => {
    
    // const [open, setOpen]= useState(false);

    const token = useUserStore((state)=> state.user)
    const getTeams = useTeamSlice((state)=> state.setTeams)
    const edit = useTeamSlice((state)=> state.edit);
    const add = useTeamSlice((state)=> state.add);
    const setEdit = useTeamSlice((state)=> state.setEdit);
    const setAdd = useTeamSlice((state)=> state.setAdd);

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
            active: "",
            email: ""
        }
        getTeams(data);
    }, [token,getTeams])
    
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
                <Button variant="contained" onClick={ ()=> setAdd(!add) }>Add New Team</Button>
            </Grid>
            <Grid item xs={12}>
                <Card>
                    <CardHeader title='Teams Table' titleTypographyProps={{ variant: 'h6' }} />
                    <TeamsTable/>

                    <Modal
                        className={''}
                        open={edit}
                        onClose={handleClose}
                    >
                        <Box sx={style}>
                            <TeamEditForm/>
                        </Box>
                    </Modal>

                    <Modal
                        className={''}
                        open={add}
                        onClose={handleClose}
                    >
                        <Box sx={style}>
                            <TeamAddForm/>
                        </Box>
                    </Modal>
                </Card>
            </Grid>
        </Grid>
    )
}

export default Teams;
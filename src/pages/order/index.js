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

import { useEffect, useState } from "react";
import { orderSlice } from "src/@core/store/orderSlice";
import { useUserStore } from "src/@core/store/userStore";
import AssignRider from 'src/views/orders/AssignRider';
import OrdersTable from 'src/views/orders/OrdersTable';

const Order = () => {
    
    const setOrder = orderSlice((state)=>state.setOrder)
    const edit = orderSlice((state)=>state.edit)
    const setEdit = orderSlice((state)=> state.setEdit )

    const token = useUserStore((state)=>state.user)
    const details = useUserStore((state)=>state.details)
    const { role }= details;
    const [userRole,setUserRole] = useState('')

    useEffect(() => {
        const data ={
            token: token,
            reference_code: "",
            account: userRole, 
            from: "",
            to: "",
            payment_status: "",
            order_status: "" 
        }

        setOrder(data)
    }, [token,setOrder,userRole])

    useEffect(() => {
       console.log(role)
        if(role.superAdmin === 'Yes'){
            setUserRole('panel')
        }else{
            setUserRole('store')
        }
    }, [role])

    const handleClose = () =>{
        if(edit){
            setEdit(!edit);
        }
    }

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

    return (
        <Grid container spacing={6} >
        <Grid item xs={12} sx={{ display:"flex", justifyContent: "space-between"}}>
            <Typography variant='h5'>
                Customer Orders
            </Typography>
            {/* <Button variant="contained" onClick={ ()=> setAdd(!add) }>Add New Stores</Button> */}
        </Grid>
        <Grid item xs={12}>
            <Card>
                <CardHeader title='Orders Table' titleTypographyProps={{ variant: 'h6' }} />

                <OrdersTable/>
                {/* <Modal
                    className={''}
                    open={add}
                    onClose={handleClose}
                >
                    <Box sx={style}>
                        <AddStoresForm/>
                    </Box>
                </Modal> */}
                <Modal
                    className={''}
                    open={edit}
                    onClose={handleClose}
                >
                    <Box sx={style}>
                        <AssignRider/>
                    </Box>
                </Modal>
            </Card>
        </Grid>
    </Grid>
    );
}

export default Order;
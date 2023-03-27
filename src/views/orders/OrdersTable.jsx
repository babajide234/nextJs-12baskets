import { useState } from 'react'

import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import DotsVertical  from 'mdi-material-ui/DotsVertical'

import { orderSlice } from 'src/@core/store/orderSlice'
import { Typography } from '@mui/material'


const createData = ( status, time, amount, pstatus, ptime,ref ) => {
    return { status, time, amount, pstatus, ptime,ref }
}

const OrdersTable = () => {

    const setEdit = orderSlice((state)=> state.setEdit);
    const edit = orderSlice((state)=> state.edit);
    const setOrderRef = orderSlice((state)=> state.setOrderRef);
    const orders = orderSlice((state)=>state.orders)

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };


    const rows = orders.map((data)=>{

        const row = createData(
            data.order_status,
            data.order_timestamp,
            data.amount.total, 
            data.payment_status, 
            data.payment_timestamp, 
            data.reference_code, 
        )

        return row
    })

    console.log("rows", rows);
    const ITEM_HEIGHT = 48;

    const handleEdit = (id) => {
        console.log(id)
        setEdit(!edit);
        setOrderRef(id);
    }
    
    const button = (id) => {

        return (
            <>
                <IconButton
                    aria-label="more"
                    id="long-button"
                    aria-controls={open ? 'long-menu' : undefined}
                    aria-expanded={open ? 'true' : undefined}
                    aria-haspopup="true"
                    onClick={handleClick}
                >
                    <DotsVertical />
                </IconButton>
                <Menu
                    id="long-menu"
                    MenuListProps={{
                        'aria-labelledby': 'long-button'
                    }}
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    PaperProps={{
                        style: {
                            maxHeight: ITEM_HEIGHT * 4.5,
                            width: '20ch'
                        }
                    }}
                >
                    <MenuItem onClick={handleEdit(id)}>Assign Rider</MenuItem>
                </Menu>
            </>
        )
    }

    return (
                <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label='simple table'>
                <TableHead>
                    <TableRow>
                        <TableCell >Order Status</TableCell>
                        <TableCell align='right'>Time</TableCell>
                        <TableCell align='right'>Amount</TableCell>
                        <TableCell align='right'>Payment Status</TableCell>
                        <TableCell align='right'>Payment Time</TableCell>
                        <TableCell align='right'>reference</TableCell>
                        <TableCell align='right'>Action</TableCell> 
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map(row => (
                        <TableRow
                            key={row.ref}
                            sx={{
                                '&:last-of-type td, &:last-of-type th': {
                                border: 0
                                }
                            }}
                        >
                            <TableCell component='th' scope='row'>{row.status}</TableCell>
                            <TableCell align='right'>{row.time}</TableCell>
                            <TableCell align='right'>{row.amount }</TableCell>
                            <TableCell align='right'>{row.pstatus }</TableCell>
                            <TableCell align='right'>{row.ptime }</TableCell>
                            <TableCell align='right'>{row.ref }</TableCell>
                            <TableCell align='right'>
                                <Button variant="outlined" size="small" onClick={()=>handleEdit(row.ref)}>
                                    <Typography variant="caption" sx={{ fontSize: '10px' }}>
                                        Assign Rider
                                    </Typography>
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default OrdersTable;
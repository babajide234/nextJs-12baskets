
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
import Chip from '@mui/material/Chip';


// import MoreVertIcon from '@mui/icons-material/MoreVert';
import DotsVertical  from 'mdi-material-ui/DotsVertical'

import {useStoreSlice} from 'src/@core/store/storeSlice'
import {useProductsSlice} from 'src/@core/store/productSlice'

import { Box, Typography, Grid } from '@mui/material'

const createData = (id, name, quantity, amount, category, details, store ) => {
    return { id, name, quantity, amount, category, details, store}
}



const ProductsTable = () => {

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };

    const products = useProductsSlice((state) => state.products);
    const setEdit = useProductsSlice((state)=> state.setEdit);

    const rows = products?.map((data)=>{
        const row = createData(
            data.id,
            data.name,
            data.quantity,
            data.amount,
            data.category_name,
            data.details,
            data.store_name, 
        )

        return row
    })

    console.log("rows", rows);
    const ITEM_HEIGHT = 48;

    const handleEdit =(id)=>{
        console.log(id)
        setEdit(true);
    }
    
    const button = (id) =>{
        return(
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
                    <MenuItem onClick={() => handleEdit(id)}>Edit</MenuItem>
            </Menu>
        </>
        )
    }

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label='simple table'>
                {
                    !rows ? (
                            <Box sx={{ display:"flex", justifyContent: "center", alignItems:"center", width:"100%", height: "20vh"}}>
                                <Typography variant='h5'>
                                    No Products
                                </Typography>
                            </Box>
                        ):(
                            <>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Name</TableCell>
                                        <TableCell align='right'>Quantity</TableCell>
                                        <TableCell align='right'>Amount</TableCell>
                                        <TableCell align='right'>Category</TableCell>
                                        <TableCell align='right'>Details</TableCell>
                                        <TableCell align='right'>Store</TableCell> 
                                        <TableCell align='right'>Action</TableCell> 
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows && rows.map(row => (
                                        <TableRow
                                            key={row.id}
                                            sx={{
                                                '&:last-of-type td, &:last-of-type th': {
                                                border: 0
                                                }
                                            }}
                                        >
                                            <TableCell component='th' scope='row'>
                                                {row.name}
                                            </TableCell>
                                            <TableCell align='right'>{row.quantity}</TableCell>
                                            <TableCell align='right'>{row.amount ? row.amount : "null"}</TableCell>
                                            <TableCell align='right'>{row.category ? row.category : "null"}</TableCell>
                                            <TableCell align='right'>{row.details ? row.details: "null"}</TableCell>
                                            <TableCell align='right'>{row.store ? row.store: "null"}</TableCell>
                                            <TableCell align='right'>{button(row.id)}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </>
                        )
                }
            </Table>
        </TableContainer>
    );
}



export default ProductsTable;

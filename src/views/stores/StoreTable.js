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

import useTeamSlice from 'src/@core/store/teamStore'

// import MoreVertIcon from '@mui/icons-material/MoreVert';
import DotsVertical  from 'mdi-material-ui/DotsVertical'
import useStoreSlice from 'src/@core/store/storeSlice'

const createData = (id, name, description, city, area, address ) => {
    return { id, name, description, city, area, address }
}



const StoresTable = () => {

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };

    const stores = useStoreSlice(state => state.stores);
    const setEdit = useTeamSlice((state)=> state.setEdit);

    const rows = stores.map((data)=>{
        const row = createData(
            data.store_id,
            data.name,
            data.description,
            data.city, 
            data.area, 
            data.address, 
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
                <TableHead>
                <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell align='right'>Description</TableCell>
                    <TableCell align='right'>City</TableCell>
                    <TableCell align='right'>Area</TableCell>
                    <TableCell align='right'>Address</TableCell>
                    <TableCell align='right'>Action</TableCell> 
                </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map(row => (
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
                            <TableCell align='right'>{row.description}</TableCell>
                            <TableCell align='right'>{row.city ? row.city : "null"}</TableCell>
                            <TableCell align='right'>{row.area ? row.area : "null"}</TableCell>
                            <TableCell align='right'>{row.address ? row.address: "null"}</TableCell>
                            <TableCell align='right'>{button(row.id)}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}



export default StoresTable;
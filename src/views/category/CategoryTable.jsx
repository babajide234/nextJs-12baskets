import { useState } from 'react'

import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
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
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';
import { ActivityStore } from 'src/@core/store/activitySlice'
import { useProductsSlice } from 'src/@core/store/productSlice'
import { useUserStore } from 'src/@core/store/userStore'

const createData = (
    id,
    name,
) => {
    return { 
        id,
        name,
    }
}

const CategoryTable = () => {
    
    const token = useUserStore((state)=> state.user);
    const categories = useProductsSlice((state)=> state.categories);
    const setSubCategories = useProductsSlice((state)=> state.setSubCategories);
    const setCatId = useProductsSlice((state)=> state.setCatId);
    const edit = useProductsSlice((state)=> state.edit);
    const setEdit = useProductsSlice((state)=> state.setEdit);

    const rows = categories?.map((data)=>{
        const row = createData(
            data.category_id,
            data.category_name,
        )

        return row
    })

    const handleEdit = (id) => {
        console.log("category id", id)
        setCatId(id);

        setEdit(!edit);
    }

    const getSub = (id) => {
        console.log(id)

        const payload ={
            token: token,
            sub_category_id: "",
            category_id: id
        }
        setCatId(id)
        setSubCategories(payload)
 
    }

    return (
        <TableContainer component={Paper}>
            <Table aria-label='simple table'>
                {
                    !rows ? (
                        <Box sx={{ display:"flex", justifyContent: "center", alignItems:"center", width:"100%", height: "20vh"}}>
                            <Typography variant='h5'>
                                No Categories
                            </Typography>
                        </Box>
                    ) : (
                        <>                        
                            <TableHead>
                                <TableRow>
                                    <TableCell>Name</TableCell>
                                    <TableCell align='right'>Actions</TableCell> 
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
                                        <TableCell align='right'>
                                            <Button variant="outlined" style={{ marginRight: 10}} size="small" onClick={()=>handleEdit(row.id)}>
                                                edit
                                            </Button>
                                            <Button variant="outlined" style={{ marginRight: 10}} size="small" onClick={()=>getSub(row.id)}>
                                                Subcategories
                                            </Button>
                                        </TableCell>
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

export default CategoryTable;
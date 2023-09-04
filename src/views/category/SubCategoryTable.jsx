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
import { useUserStore } from 'src/@core/store/userStore'
import { useProductsSlice } from 'src/@core/store/productSlice'

const createData = (
    id,
    name,
) => {
    return { 
        id,
        name,
    }
}

const SubCategoryTable = () => {

    const token = useUserStore((state)=> state.token);
    const setSubCategories = useProductsSlice((state)=> state.setSubCategories);
    const subcategories = useProductsSlice((state)=> state.subcategories);

    const rows = subcategories?.map((data)=>{
        const row = createData(
            data.sub_category_id,
            data.sub_category_name,
        )

        return row
    });

    return (
        <TableContainer component={Paper}>
            <Table  aria-label='simple table'>
                {
                    !rows ? (
                        <Box sx={{ display:"flex", justifyContent: "center", alignItems:"center", width:"100%", height: "20vh"}}>
                            <Typography variant='h5'>
                                No SubCategories
                            </Typography>
                        </Box>
                    ) : (
                        <>                        
                            <TableHead>
                                <TableRow>
                                    <TableCell>Name</TableCell>
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
                                        {/* <TableCell align='right'>
                                            <Button variant="outlined" style={{ marginRight: 10}} size="small" onClick={()=>handleEdit(row.id)}>
                                                edit
                                            </Button>
                                            
                                        </TableCell> */}
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

export default SubCategoryTable;
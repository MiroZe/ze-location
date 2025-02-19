import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';

import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';
import { useState } from 'react';
import ExportedGoodItem from './ExportedGoodItem';
import useDeclarationStateStore from '../../../zustand/declarationState';


const ExportedGoodItems = ({ goodItems }) => {


    const ITEMS_PER_PAGE = 20;


    const [page, setPage] = useState(1);
    const { clearAllDeclarations } = useDeclarationStateStore(); 

    const totalPages = Math.ceil(goodItems.length / ITEMS_PER_PAGE)
    const paginatedItems = goodItems.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

    const handlePageChange = (_, value) => {
        setPage(value);
    };

    const deleteDeclarations = () => {
        clearAllDeclarations();

    }


    return (
        <Box sx={{ flexGrow: 1, p: 2 }}>
            <Stack spacing={3} alignItems="center">

                <Pagination count={totalPages} color="secondary" page={page} onChange={handlePageChange} />


                <Grid container spacing={2}>


                    {paginatedItems.map((e, index) => <ExportedGoodItem key={index} goodItem={e} />)}

                </Grid>




                <Pagination count={totalPages} color="secondary" page={page} onChange={handlePageChange} />
                <div>
                    <Button variant="contained" color="success" onClick={deleteDeclarations}> 
                        Save
                    </Button>

            <Button variant="contained" endIcon={<ArrowDropDownCircleIcon />}>
                Send to Excel
            </Button>
                </div>
            </Stack>
        </Box>
    )



};

export default ExportedGoodItems;
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';

import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useState } from 'react';


const ExportedGoodItems = () => {

    const totalPages = 5

    const [page, setPage] = useState(1); // Current page state


    const handlePageChange = (_, value) => {
             setPage(value);
           };


    return (
        <Box sx={{ flexGrow: 1, p: 2 }}>
            <Stack spacing={3} alignItems="center">
                {/* Pagination on top */}
                <Pagination count={totalPages} color="secondary" page={page} onChange={handlePageChange} />

             
                <Grid container spacing={2}>
                    
                            
                </Grid>
                
              

                {/* Pagination on bottom */}
                <Pagination count={totalPages} color="secondary" page={page} onChange={handlePageChange} />
            </Stack>
        </Box>
    )



};

export default ExportedGoodItems;
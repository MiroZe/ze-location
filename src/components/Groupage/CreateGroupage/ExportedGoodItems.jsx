import { useState } from 'react';
import { Box, Stack, Pagination, Button } from '@mui/material';
import Grid from '@mui/material/Grid2';
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';
import ExportedGoodItem from './ExportedGoodItem'; 
import useDeclarationStateStore from '../../../zustand/declarationState';
import { getExcelFile } from '../../../services/declarationService';

const ExportedGoodItems = ({ mrn }) => {


    
    

    const ITEMS_PER_PAGE = 20;
    const [page, setPage] = useState(1);
    
    const { declarations, updateGoodItemsByMRN } = useDeclarationStateStore();
   
   
    
    
    const goodItemsArray = declarations[0]?.goodItems || [];
    const [allGoodItems, setAllGoodItems] = useState(goodItemsArray); 
   
   
     

    const totalPages = Math.ceil(goodItemsArray.length / ITEMS_PER_PAGE);
    const paginatedItems = goodItemsArray.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

    const handlePageChange = (_, value) => {
        setPage(value);
    };

    const handleGoodItemChange = (index, updatedItem) => {
        const globalIndex = (page - 1) * ITEMS_PER_PAGE + index; // Adjust index for pagination
        const updatedGoodItems = allGoodItems.map((item, i) =>
            i === globalIndex ? updatedItem : item
        );
        setAllGoodItems(updatedGoodItems); // Update local state
    };

    const handleSaveChanges = () => {
      
        updateGoodItemsByMRN(mrn, allGoodItems); // Save changes to the store
    };

    const sendDeclarationDataHandler = async () => {
       
        console.log(declarations);
        
        try {
            const blob = await getExcelFile(declarations);
            const url = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = 'export.xlsx'; // Set the file name
            document.body.appendChild(link);
            link.click();

            // Clean up
            document.body.removeChild(link);
            window.URL.revokeObjectURL(url);
        } catch (error) {
            console.error('Error downloading Excel file:', error);
        }
    };

    return (
        <Box sx={{ flexGrow: 1, p: 2 }}>
            <Stack spacing={3} alignItems="center">
                <Pagination
                    count={totalPages}
                    color="secondary"
                    page={page}
                    onChange={handlePageChange}
                />

                <Grid container spacing={2}>
                    {paginatedItems.map((goodItem, index) => (
                        <ExportedGoodItem
                            key={(page - 1) * ITEMS_PER_PAGE + index} // Unique key
                            goodItem={goodItem}
                            onChange={(updatedItem) => handleGoodItemChange(index, updatedItem)}
                        />
                    ))}
                </Grid>

                <Pagination
                    count={totalPages}
                    color="secondary"
                    page={page}
                    onChange={handlePageChange}
                />

                <div>
                    <Button variant="contained" color="success" onClick={handleSaveChanges}>
                        Save
                    </Button>
                    <Button
                        variant="contained"
                        onClick={sendDeclarationDataHandler}
                        endIcon={<ArrowDropDownCircleIcon />}
                    >
                        Send to Excel
                    </Button>
                </div>
            </Stack>
        </Box>
    );
};

export default ExportedGoodItems;
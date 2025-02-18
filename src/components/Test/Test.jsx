
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import TextField from '@mui/material/TextField';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const Test = () => {








    return (
      
      
        
      
      
            <Box sx={{ flexGrow: 1, p: 2 }}>
              <Stack spacing={3}> 
                {/* Pagination on top */}
                <Pagination count={10} color="secondary" />
        
                {/* Grid Container */}
                <Grid container spacing={2}>
                  {/* Example: 200 Grid items */}
                  {Array.from({ length: 200 }, (_, index) => (
                    <Grid item xs={4} key={index}>
                      <TextField 
                        id={`outlined-basic-${index}`} 
                        name={`tsn-${index}`} 
                        label={`Field ${index + 1}`} 
                        variant="outlined" 
                        fullWidth 
                      />
                    </Grid>
                  ))}
                </Grid>
        
                {/* Pagination on bottom */}
                <Pagination count={10} color="secondary" />
              </Stack>
            </Box>
          
        
        
   

    )




}
export default Test




// PAGINATION LOGIC

// const MyComponent = () => {
//   const itemsPerPage = 10; // Number of items per page
//   const totalItems = 200; // Total Grid items
//   const totalPages = Math.ceil(totalItems / itemsPerPage); // Calculate total pages

//   const [page, setPage] = useState(1); // Current page state

//   // Generate 200 dummy items
//   const allItems = Array.from({ length: totalItems }, (_, index) => ({
//     id: index + 1,
//     label: `Field ${index + 1}`,
//   }));

//   // Get only the items for the current page
//   const paginatedItems = allItems.slice((page - 1) * itemsPerPage, page * itemsPerPage);

//   const handlePageChange = (_, value) => {
//     setPage(value);
//   };

//   return (
//     <Box sx={{ flexGrow: 1, p: 2 }}>
//       <Stack spacing={3} alignItems="center">
//         {/* Pagination on top */}
//         <Pagination count={totalPages} color="secondary" page={page} onChange={handlePageChange} />

//         {/* Grid Container - Shows only 10 items per page */}
//         <Grid container spacing={2}>
//           {paginatedItems.map((item) => (
//             <Grid item xs={4} key={item.id}>
//               <TextField 
//                 id={`outlined-basic-${item.id}`} 
//                 name={`tsn-${item.id}`} 
//                 label={item.label} 
//                 variant="outlined" 
//                 fullWidth 
//               />
//             </Grid>
//           ))}
//         </Grid>

//         {/* Pagination on bottom */}
//         <Pagination count={totalPages} color="secondary" page={page} onChange={handlePageChange} />
//       </Stack>
//     </Box>
//   );
// };

// export default MyComponent;

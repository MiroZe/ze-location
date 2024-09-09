import { Box } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import TruckTimer from './TruckTimer';


const TruckList = ({ truckList }) => {



  
    

  const columns = [
    { field: 'id', headerName: 'N:', width: 50 },
    {
      field: 'tsn',
      headerName: 'TSN',
      width: 150,
      editable: true,
    },
    {
      field: 'lrn',
      headerName: 'LRN',
      width: 150,
      editable: true,
    },
    {
      field: 'truckNumber',
      headerName: 'Truck Number',
      width: 110,
      editable: true,
    },
    {
      field: 'carrier',
      headerName: 'Carrier',
      width: 110,
      editable: true,
    },
    {
      field: 'time',
      headerName: 'Time',
      description: 'This column shows time in HH:mm format.',
      width: 160,
    },
    {
      field: 'countdown',
      headerName: 'Countdown',
      description: 'This column shows the countdown timer.',
      width: 400,
      renderCell: () => {
        
        return <TruckTimer  />;
      },
    },
    
  ];

  const rows = truckList.map((t, index) => ({
    id: index + 1,
    tsn: t.formValues.tsn,
    lrn: t.formValues.lrn,

    truckNumber: t.formValues.truckNumber,
    carrier: t.formValues.carrier,
    time: `${t.truckTime.hour}:${t.truckTime.mins < 10 ? '0' + t.truckTime.mins : t.truckTime.mins}`,
   
    status: '',
  }));

 

  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        pageSizeOptions={[5]}
        disableRowSelectionOnClick
      />
    </Box>
  );
};

export default TruckList;


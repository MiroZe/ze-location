import { Box } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import TruckTimer from '../TruckTimer';
import styles from './TruckList.module.css'


const TruckList = ({ truckList }) => {


  const columns = [
    { field: 'id', headerName: 'N:', width: 10, headerAlign:'center' },
    {
      field: 'tsn',
      headerName: 'TSN',
      width: 190,
      editable: true,
      headerAlign: 'center'
      
    },
    {
      field: 'mrn',
      headerName: 'MRN',
      width: 190,
      editable: true,
      headerAlign: 'center'

    },
    {
      field: 'truckNumber',
      headerName: 'Truck Number',
      width: 110,
      editable: true,
      headerAlign: 'center'

    },
    {
      field: 'carrier',
      headerName: 'Carrier',
      width: 150,
      editable: true,
      headerAlign: 'center'

    },
    {
      field: 'time',
      headerName: 'Time',
      description: 'This column shows time in HH:mm format.',
      width: 70,
      headerAlign: 'center'

    },
    {
      field: 'countdown',
      headerName: 'Countdown',
      description: 'This column shows the countdown timer.',
      width: 400,
      headerAlign: 'center',

      renderCell: () => {
        
        return <TruckTimer  />;
      },
    },
    
  ];

  const rows = truckList.map((t, index) => ({
    id: index + 1,
    tsn: t.formValues.tsn,
    mrn: t.mrn,

    truckNumber: t.truckNumber,
    carrier: t.carrier,
    time: t.formattedTruckTime,
   
    status: '',
   
   
  }));

 

  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        className={styles['grid-container']}
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


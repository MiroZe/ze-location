import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid2';



const ExportedGoodItem = ({goodItem}) => {

    console.log(goodItem);
    

    return (

        
        <Grid  >
            <TextField
                sx={{ width: '50px' }}
                id='outlined-basic'
                name='N:'
                label='N:'
                value={goodItem['Goods Item N']}
                 
            />
             <TextField
                id='outlined-basic'
                name='HS code'
                label='HS code'
                value={goodItem['HS code']}
                 
            />
            <TextField
                id='outlined-basic'
                name='Description'
                label='Description'
                value=''
                 
            />
               <TextField
                id='outlined-basic'
                name='HS code'
                label='Gross weight'
                value={goodItem['Gross weight']}
                 
            />
                <TextField
                id='outlined-basic'
                name='Net Weight'
                label='Net Weight'
                value={goodItem['Net weight']}
                 
            />
             <TextField
                id='outlined-basic'
                name='Statical Value'
                label='Statical Value'
                value={goodItem['Statical value']}
                 
            />
        </Grid>

    )



}


export default ExportedGoodItem;
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid2';



const ExportedGoodItem = ({goodItem}) => {

    return (

        <Grid item xs={4} key={goodItem.id}>
            <TextField
                id={`outlined-basic-${goodItem.id}`}
                name={`tsn-${goodItem.id}`}
                label={goodItem.label}
                variant="outlined"
                fullWidth
            />
        </Grid>

    )



}


export default ExportedGoodItem;
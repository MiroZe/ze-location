
import TextField from '@mui/material/TextField';

const MRNGoodItem = () => {


    return (

        <div>
            <TextField
                required
                id="outlined-required"
                label="Required"
                defaultValue="HS Code"
            />
                  <TextField
                required
                id="outlined-required"
                label="Required"
                defaultValue="Description"
            />
            <TextField
                required
                id="outlined-required"
                label="Required"
                defaultValue="GrossWeight"
            />
                 <TextField
                required
                id="outlined-required"
                label="Required"
                defaultValue="Number of packs"
            />
        </div>

    )


}

export default MRNGoodItem;
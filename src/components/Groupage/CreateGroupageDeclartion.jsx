
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { useForm } from '../../hooks/useForm';



const CreateGroupageDeclartion = () => {

    const initialGropuageFormValues = {
        goodsItemsCount: 0,
        invoiceValue: 0,
        currency: ''


    }

    const { formValues, onChangeHandler } = useForm(initialGropuageFormValues)

    console.log(formValues);


    return (
        <div>
            <h3>Groupage start page</h3>
            <FormControl
                component="form">

                <TextField id="outlined-basic" label="Брой стоки" variant="outlined" type='number' />
                <TextField id="outlined-basic" label="Фактурна ст-ст" variant="outlined" type='number' />
                <TextField id="outlined-basic" label="Общ брой колети" variant="outlined" type='number' />
                <Select
                    name='currency'
                    id="demo-simple-select"
                    value={formValues.currency}
                    label="Currency"
                    onChange={onChangeHandler}
                >
                    <MenuItem value='EUR'>EUR</MenuItem>
                    <MenuItem value='USD'>USD</MenuItem>
                    <MenuItem value='TRY'>TRY</MenuItem>
                    <MenuItem value='DKK'>DKK</MenuItem>
                </Select>



            </FormControl>

        </div>
    )



};


export default CreateGroupageDeclartion;
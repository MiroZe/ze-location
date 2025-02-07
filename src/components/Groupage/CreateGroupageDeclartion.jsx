
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import MenuItem from '@mui/material/MenuItem';
import { useForm } from '../../hooks/useForm';




const CreateGroupageDeclartion = () => {

    const initialGropuageFormValues = {
        goodsItemsCount: 0,
        totalPacks: 0,
        exportMRNNumber:'',
        invoiceNumber: '',
        cmrNumber:'',
        invoiceValue: 0,
        currencyCode: '',
        consignorCountryCode:'',
        consignorID:'',
        consignorName:'',
        consignorAddres:'',
        consignorCity:'',
        consignorPostalCode:'',
        consigneeCountryCode:'',
        consigneeID:'',
        consigneeName:'',
        consigneeAddres:'',
        consigneeCity:'',
        consigneePostalCode:''
        



    }

    const { formValues, onChangeHandler } = useForm(initialGropuageFormValues)

   


    return (
        <div>
            
            <FormControl
                component="form">

                <TextField id="outlined-basic" label="Брой стоки" variant="outlined" type='number' name='goodIemsCount' />
                <TextField id="outlined-basic" label="Общ брой колети" variant="outlined" type='number' name='totalPacks' />
                <TextField id="outlined-basic" label="MRN на износа" variant="outlined"  name='exportMRNNumber' />
                <TextField id="outlined-basic" label="Фактура номер" variant="outlined" name='invoiceNumber'  />
                <TextField id="outlined-basic" label="ЧМР номер" variant="outlined" name='cmrNumber' />
                <TextField id="outlined-basic" label="Фактурна ст-ст" variant="outlined" type='number' name='invoiceValue' />
                <Select
                    name='currency'
                    id="demo-simple-select"
                    value={formValues.currencyCode}
                    label="Currency"
                    onChange={onChangeHandler}
                >
                    <MenuItem value='EUR'>EUR</MenuItem>
                    <MenuItem value='USD'>USD</MenuItem>
                    <MenuItem value='TRY'>TRY</MenuItem>
                    <MenuItem value='DKK'>DKK</MenuItem>
                </Select>
                <div>
                <h5>Изпращач</h5>
                    <div>
                <TextField id="outlined-basic" label="Код държава" variant="outlined" name='consignorCountryCode' />
                <TextField id="outlined-basic" label="ID изпращач" variant="outlined" name='consignorID' />
                <TextField id="outlined-basic" label="Име изпращач" variant="outlined" name='consignorName' />
                </div>
                <div>
                <TextField id="outlined-basic" label="Адрес" variant="outlined" name='consignorAddress' />
                <TextField id="outlined-basic" label="Град" variant="outlined"  name='consignorCity'/>
                <TextField id="outlined-basic" label="ПК" variant="outlined" type='number' name='consignorPostalCode'/>
                </div>
                </div>
                <div>
                    <h5>Получател</h5>
                    <div>
                <TextField id="outlined-basic" label="Код държава" variant="outlined" name='consigneeCountryCode' />
                <TextField id="outlined-basic" label="ID получател" variant="outlined" name='consigneeID' />
                <TextField id="outlined-basic" label="Име получател" variant="outlined" name='consigneeName' />
                </div>
                <div>
                <TextField id="outlined-basic" label="Адрес" variant="outlined" name='consigneeAddress' />
                <TextField id="outlined-basic" label="Град" variant="outlined"  name='consigneeCity'/>
                <TextField id="outlined-basic" label="ПК" variant="outlined" type='number' name='consigneePostalCode'/>
                </div>
                </div>

                <Button variant="contained" endIcon={<SendIcon />}>
        Напред
      </Button>


            </FormControl>

        </div>
    )



};


export default CreateGroupageDeclartion;
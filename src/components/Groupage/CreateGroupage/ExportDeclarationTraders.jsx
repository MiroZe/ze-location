import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { useForm } from '../../../hooks/useForm';







const ExportDeclarationTraders = ({exportData}) => {

    const {parsedData} = exportData;



    console.log(parsedData.Consignee['Name']);
    



     const initialGropuageFormValues = {
           
            totalPacks: 0,
            exportMRNNumber:parsedData.MRN || '',
            invoiceNumber: '',
            cmrNumber:'',
            invoiceValue: 0,
            currencyCode: '',
            consignorCountryCode:'',
            consignorID:'',
            consignorName:parsedData.Consignor['Name'] || '',
            consignorAddres:'',
            consignorCity:'',
            consignorPostalCode:'',
            consigneeCountryCode:'',
            consigneeID:'',
            consigneeName:parsedData.Consignee['Name'] || '',
            consigneeAddres:'',
            consigneeCity:'',
            consigneePostalCode:''
            
    
    
    
        }
        const { formValues, onChangeHandler } = useForm(initialGropuageFormValues)

        
    
    

return(
    <div>
            
    <FormControl
        component="form">
            <div>
        <TextField id="outlined-basic" label="MRN на износа" name='exportMRNNumber' value={formValues.exportMRNNumber} />
        <TextField id="outlined-basic" label="Общ брой колети" type='number' name='totalPacks' />

            </div>
            <div>
        <TextField id="outlined-basic" label="Фактура номер" variant="outlined" name='invoiceNumber'  />
        <TextField id="outlined-basic" label="ЧМР номер" variant="outlined" name='cmrNumber' />

            </div>
            <div>
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
            </div>
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
        <TextField id="outlined-basic" label="Код държава" variant="outlined" name='consigneeCountryCode' value={formValues.consigneeCountryCode} />
        <TextField id="outlined-basic" label="ID получател" variant="outlined" name='consigneeID' />
        <TextField id="outlined-basic" label="Име получател" name='consigneeName' value={formValues.consigneeName} />
        </div>
        <div>
        <TextField id="outlined-basic" label="Адрес" variant="outlined" name='consigneeAddress' />
        <TextField id="outlined-basic" label="Град" variant="outlined"  name='consigneeCity'/>
        <TextField id="outlined-basic" label="ПК" variant="outlined" type='number' name='consigneePostalCode'/>
        </div>
        </div>

        <Button variant="contained" endIcon={<SendIcon />} >
Напред
</Button>


    </FormControl>

</div>
)




}



export default ExportDeclarationTraders;
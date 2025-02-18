import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { useForm } from '../../../hooks/useForm';







const ExportDeclarationTraders = ({exportData, handleComponentChange}) => {

    const {parsedData} = exportData;



    console.log(parsedData);
    



     const initialGropuageFormValues = {
           
            totalPacks: 0,
            exportMRNNumber:parsedData.MRN || '',
            totalGross:parsedData['Total Gross weight'] || '',
            invoiceNumber: '',
            cmrNumber:'',
            invoiceValue: 0,
            currencyCode: '',
            consignorCountryCode:'',
            consignorID:'',
            consignorName:parsedData.Consignor['Name'] || '',
            consignorAddres:'',
            consignorCity:'',
            consignorPostCode:'',
            consigneeCountryCode:'',
            consigneeID:'',
            consigneeName:parsedData.Consignee['Name'] || '',
            consigneeAddres:parsedData.Consignee['Address'] || '',
            consigneeCity:'',
            consigneePostCode:''
            
    
    
    
        }
        const { formValues, onChangeHandler } = useForm(initialGropuageFormValues)


return(
    <div>
            
    <FormControl
        component="form">
            <div>
        <TextField id="outlined-basic" label="MRN на износа" name='exportMRNNumber' value={formValues.exportMRNNumber} />
        <TextField  id="filled-basic" label="Общ брой колети" type='number' name='totalPacks' value={formValues.totalPacks}/>
        <TextField  id="filled-basic" label="Общо бруто тегло" type='number' name='totalGross' value={formValues.totalGross}/>

            </div>
            <div>
        <TextField id="outlined-basic" label="Фактура номер"  name='invoiceNumber'  />
        <TextField id="outlined-basic" label="ЧМР номер"  name='cmrNumber' />

            </div>
            <div>
        <TextField id="outlined-basic" label="Фактурна ст-ст"  type='number' name='invoiceValue' />

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
        <TextField id="outlined-basic" label="Код държава"  name='consignorCountryCode' value={formValues.consignorCountryCode}/>
        <TextField id="outlined-basic" label="ID изпращач"  name='consignorID' value={formValues.consignorID} />
        <TextField id="outlined-basic" label="Име изпращач"  name='consignorName' value={formValues.consignorName}/>
        </div>
        <div>
        <TextField id="outlined-basic" label="Адрес"  name='consignorAddress' value={formValues.consignorAddress}/>
        <TextField id="outlined-basic" label="Град"   name='consignorCity' value={formValues.consignorCity}/>
        <TextField id="outlined-basic" label="ПК"  type='number' name='consignorPostalCode' value={formValues.consignorPostCode}/>
        </div>
        </div>
        <div>
            <h5>Получател</h5>
            <div>
        <TextField id="outlined-basic" label="Код държава"  name='consigneeCountryCode' value={formValues.consigneeCountryCode} />
        <TextField id="outlined-basic" label="ID получател"  name='consigneeID' value={formValues.consigneeID}/>
        <TextField id="outlined-basic" label="Име получател" name='consigneeName' value={formValues.consigneeName} />
        </div>
        <div>
        <TextField id="outlined-basic" label="Адрес" name='consigneeAddress' value={formValues.consigneeAddress} />
        <TextField id="outlined-basic" label="Град"   name='consigneeCity' value={formValues.consigneeCity}/>
        <TextField id="outlined-basic" label="ПК"  type='number' name='consigneePostalCode' value={formValues.consigneePostCode} />
        </div>
        </div>

        <Button variant="contained" endIcon={<SendIcon />} onClick={() => handleComponentChange(2)} >
Напред
</Button>


    </FormControl>

</div>
)




}



export default ExportDeclarationTraders;
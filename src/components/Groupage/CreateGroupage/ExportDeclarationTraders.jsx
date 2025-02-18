import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { useForm } from '../../../hooks/useForm';







const ExportDeclarationTraders = ({exportData, handleComponentChange}) => {

    const {parsedData} = exportData;



   
    



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
        <TextField id="outlined-basic" label="MRN на износа" name='exportMRNNumber' value={formValues.exportMRNNumber} onChange={onChangeHandler}/>
        <TextField  id="filled-basic" label="Общ брой колети" type='number' name='totalPacks' value={formValues.totalPacks} onChange={onChangeHandler}/>
        <TextField  id="filled-basic" label="Общо бруто тегло" type='number' name='totalGross' value={formValues.totalGross} onChange={onChangeHandler}/>

            </div>
            <div>
        <TextField id="outlined-basic" label="Фактура номер"  name='invoiceNumber' onChange={onChangeHandler} value={formValues.invoiceNumber} />
        <TextField id="outlined-basic" label="ЧМР номер"  name='cmrNumber'  onChange={onChangeHandler} value={formValues.cmrNumber}/>

            </div>
            <div>
        <TextField id="outlined-basic" label="Фактурна ст-ст"  type='number' name='invoiceValue' onChange={onChangeHandler} value={formValues.invoiceValue} />

        <Select
            name='currencyCode'
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
        <TextField id="outlined-basic" label="Код държава"  name='consignorCountryCode' value={formValues.consignorCountryCode} onChange={onChangeHandler}/>
        <TextField id="outlined-basic" label="ID изпращач"  name='consignorID' value={formValues.consignorID} onChange={onChangeHandler}/>
        <TextField id="outlined-basic" label="Име изпращач"  name='consignorName' value={formValues.consignorName} onChange={onChangeHandler}/>
        </div>
        <div>
        <TextField id="outlined-basic" label="Адрес"  name='consignorAddress' value={formValues.consignorAddress} onChange={onChangeHandler}/>
        <TextField id="outlined-basic" label="Град"   name='consignorCity' value={formValues.consignorCity} onChange={onChangeHandler}/>
        <TextField id="outlined-basic" label="ПК"  type='number' name='consignorPostCode' value={formValues.consignorPostCode} onChange={onChangeHandler}/>
        </div>
        </div>
        <div>
            <h5>Получател</h5>
            <div>
        <TextField id="outlined-basic" label="Код държава"  name='consigneeCountryCode' value={formValues.consigneeCountryCode} onChange={onChangeHandler} />
        <TextField id="outlined-basic" label="ID получател"  name='consigneeID' value={formValues.consigneeID} onChange={onChangeHandler}/>
        <TextField id="outlined-basic" label="Име получател" name='consigneeName' value={formValues.consigneeName} onChange={onChangeHandler}/>
        </div>
        <div>
        <TextField id="outlined-basic" label="Адрес" name='consigneeAddress' value={formValues.consigneeAddress} onChange={onChangeHandler} />
        <TextField id="outlined-basic" label="Град"   name='consigneeCity' value={formValues.consigneeCity} onChange={onChangeHandler}/>
        <TextField id="outlined-basic" label="ПК"  type='number' name='consigneePostCode' value={formValues.consigneePostCode} onChange={onChangeHandler} />
        </div>
        </div>

        <Button variant="contained" endIcon={<SendIcon />} onClick={() => handleComponentChange(2, formValues)} >
Напред
</Button>


    </FormControl>

</div>
)




}



export default ExportDeclarationTraders;
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { useForm } from '../../../hooks/useForm';
import { useEffect, useState } from 'react';
import { validateFields } from '../../../utils/validateMRN';








const ExportDeclarationTraders = ({ exportData, handleComponentChange }) => {

    const { parsedData } = exportData;
    const goodItemsData = parsedData['Good Items'];
    const [errors, setErrors] = useState({});




    const handleSubmitForm = (e) => {
        e.preventDefault();
        const validationErrors = validateFields(formValues);
        setErrors(validationErrors)
        console.log(errors);
        if(Object.keys(validationErrors).length > 0) {
            console.log('Validation failed:', validationErrors);
            console.log(formValues);
            
            return; // Stop execution if errors exist
        } 
            handleComponentChange(e, 2, formValues, goodItemsData)
        
        
    }



    const initialGropuageFormValues = {

        totalPacks: 0,
        mrnNumber: parsedData.MRN || '',
        totalGross: parsedData['Total Gross weight'] || '',
        invoiceNumber:'',
        cmrNumber:'',
        invoiceValue: 0,
        currencyCode:'',
        consignorCountryCode: '',
        consignorID:'',
        consignorName: parsedData.Consignor['Name'] || '',
        consignorAddress:'',
        consignorCity:'',
        consignorPostCode: '',
        consigneeCountryCode: '',
        consigneeID:'',
        consigneeName: parsedData.Consignee['Name'] || '',
        consigneeAddress: parsedData.Consignee['Address'] || '',
        consigneeCity:'',
        consigneePostCode:''




    }
    const { formValues, onChangeHandler } = useForm(initialGropuageFormValues);


    
    useEffect(() => {
      
        const updatedErrors = { ...errors };

       
        Object.entries(formValues).forEach(([key, value]) => {
            if (value) {
                delete updatedErrors[key]; 
            }
        });
    
        setErrors(updatedErrors);
    }, [formValues,errors]);



    return (
        <div>

            <FormControl
                component="form"
                noValidate
                onSubmit={handleSubmitForm }>
                <div>
                    <TextField id="outlined-basic" label="MRN на износа" name='mrnNumber' value={formValues.mrnNumber} onChange={onChangeHandler} error={!!errors.mrnNumber} helperText={errors.mrnNumber}  />
                    <TextField id="filled-basic" label="Общ брой колети" type='number' 
                    name='totalPacks' value={formValues.totalPacks} 
                    onChange={onChangeHandler} 
                    error={!!errors.totalPacks} helperText={errors.totalPacks} />
                    <TextField id="filled-basic" label="Общо бруто тегло" type='number' name='totalGross' value={formValues.totalGross} onChange={onChangeHandler} />

                </div>
                <div>
                    <TextField id="outlined-basic" label="Фактура номер" name='invoiceNumber' onChange={onChangeHandler} value={formValues.invoiceNumber} error={!!errors.invoiceNumber} helperText={errors.invoiceNumber} />
                    <TextField id="outlined-basic" label="ЧМР номер" name='cmrNumber' onChange={onChangeHandler} value={formValues.cmrNumber} error={!!errors.cmrNumber} helperText={errors.cmrNumber}/>

                </div>
                <div>
                    <TextField id="outlined-basic" label="Фактурна ст-ст" type='number' name='invoiceValue' onChange={onChangeHandler} value={formValues.invoiceValue} error={!!errors.invoiceValue} helperText={errors.invoiceValue}/>

                    <Select
                        name='currencyCode'
                        id="demo-simple-select"
                        value={formValues.currencyCode}
                        label="Currency"
                        onChange={onChangeHandler}
                        error={!!errors.currencyCode} helperText={errors.currencyCode}
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
                        <TextField id="outlined-basic" label="Код държава" name='consignorCountryCode' value={formValues.consignorCountryCode} onChange={onChangeHandler} error={!!errors.consignorCountryCode} helperText={errors.consignorCountryCode}/>
                        <TextField id="outlined-basic" label="ID изпращач" name='consignorID' value={formValues.consignorID} onChange={onChangeHandler} />
                        <TextField id="outlined-basic" label="Име изпращач" name='consignorName' value={formValues.consignorName} onChange={onChangeHandler} error={!!errors.consignorName} helperText={errors.consignorName}/>
                    </div>
                    <div>
                        <TextField id="outlined-basic" label="Адрес" name='consignorAddress' value={formValues.consignorAddress} onChange={onChangeHandler} error={!!errors.consignorAddress} helperText={errors.consignorAddress}/>
                        <TextField id="outlined-basic" label="Град" name='consignorCity' value={formValues.consignorCity} onChange={onChangeHandler} error={!!errors.consignorCity} helperText={errors.consignorCity}/>
                        <TextField id="outlined-basic" label="ПК" type='number' name='consignorPostCode' value={formValues.consignorPostCode} onChange={onChangeHandler} error={!!errors.consignorPostCode} helperText={errors.consignorPostCode}/>
                    </div>
                </div>
                <div>
                    <h5>Получател</h5>
                    <div>
                        <TextField id="outlined-basic" label="Код държава" name='consigneeCountryCode' value={formValues.consigneeCountryCode} onChange={onChangeHandler} error={!!errors.consigneeCountryCode} helperText={errors.consigneeCountryCode}/>
                        <TextField id="outlined-basic" label="ID получател" name='consigneeID' value={formValues.consigneeID} onChange={onChangeHandler} />
                        <TextField id="outlined-basic" label="Име получател" name='consigneeName' value={formValues.consigneeName} onChange={onChangeHandler} error={!!errors.consigneeName} helperText={errors.consigneeName} />
                    </div>
                    <div>
                        <TextField id="outlined-basic" label="Адрес" name='consigneeAddress' value={formValues.consigneeAddress} onChange={onChangeHandler} error={!!errors.consigneeAddress} helperText={errors.consigneeAddress} />
                        <TextField id="outlined-basic" label="Град" name='consigneeCity' value={formValues.consigneeCity} onChange={onChangeHandler} error={!!errors.consigneeCity} helperText={errors.consigneeCity}/>
                        <TextField id="outlined-basic" label="ПК" type='number' name='consigneePostCode' value={formValues.consigneePostCode} onChange={onChangeHandler} error={!!errors.consigneePostCode} helperText={errors.consigneePostCode}/>
                    </div>
                </div>

                <Button variant="contained" type='submit' endIcon={<SendIcon />}  >
                    Напред
                </Button>


            </FormControl>

        </div>
    )




}



export default ExportDeclarationTraders;
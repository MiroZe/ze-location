import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid2';

import { useForm } from '../../../hooks/useForm';
import { useEffect, useState } from 'react';




const ExportedGoodItem = ({goodItem , onChange }) => {


    console.log(goodItem);
    
    
    const initialGoodItemsValue = {
        'Goods Item N':goodItem['Goods Item N'],
        'HS code': goodItem['HS code'],
        'totalPacks': goodItem['totalPacks'] || 0,
        'Gross weight': goodItem['Gross weight'],
        'Net weight' : goodItem["Net weight"],
        'Statical Value' :goodItem["Statical Value"]



    }

    const {formValues,onChangeHandler} = useForm(initialGoodItemsValue);
    const [previousFormValues, setPreviousFormValues] = useState(initialGoodItemsValue);

    useEffect(() => {
        
        if (JSON.stringify(formValues) !== JSON.stringify(previousFormValues)) {
          if (onChange) {
            onChange(formValues);
          }
          setPreviousFormValues(formValues); // Update the previous form values
        }
      }, [formValues, previousFormValues, onChange]);

   

    
    

    return (

        
        <Grid  >
            <TextField
                sx={{ width: '71px' }}
                id='outlined-basic'
                name='N:'
                label='N:'
                value={formValues['Goods Item N']}
                disabled
                onChange={onChangeHandler}
                 
            />
             <TextField
                id='outlined-basic'
                name='HS code'
                label='HS code'
                value={formValues['HS code']}
                onChange={onChangeHandler}
                 
            />
            <TextField
                id='outlined-basic'
                name='totalPacks'
                label='Number of packs'
                value={formValues['totalPacks']}
                onChange={onChangeHandler}
                 
            />
               <TextField
                id='outlined-basic'
                name='Gross weight'
                label='Gross weight'
                value={formValues['Gross weight']}
                onChange={onChangeHandler}
                 
            />
                <TextField
                id='outlined-basic'
                name='Net weight'
                label='Net Weight'
                value={formValues['Net weight']}
                onChange={onChangeHandler}
                 
            />
             <TextField
                id='outlined-basic'
                name='Statical Value'
                label='Statical Value'
                value={formValues['Statical Value']}
                onChange={onChangeHandler}
                 
            />
        </Grid>

    )



}


export default ExportedGoodItem;
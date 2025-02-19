import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid2';
import useDeclarationStateStore from '../../../zustand/declarationState';
import { useForm } from '../../../hooks/useForm';



const ExportedGoodItem = ({goodItem}) => {

    
    
    const {declarations} = useDeclarationStateStore();
    console.log(declarations);
    
    const initialGoodItemsValue = {
        'Goods Item N':goodItem['Goods Item N'],
        'HS code': goodItem['HS code'],
        'Description': '',
        'Gross weight' : goodItem['Gross weight'],
        'Net weight' : goodItem['Net weight'],
        'Statical Value' : goodItem['Statical value']



    }

    const {formValues,onChangeHandler} = useForm(initialGoodItemsValue)
    

    return (

        
        <Grid  >
            <TextField
                sx={{ width: '50px' }}
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
                name='Description'
                label='Description'
                value={formValues['Description']}
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
                name='Net Weight'
                label='Net Weight'
                value={formValues['Net weight']}
                onChange={onChangeHandler}
                 
            />
             <TextField
                id='outlined-basic'
                name='Statical Value'
                label='Statical Value'
                value={formValues['Statical value']}
                onChange={onChangeHandler}
                 
            />
        </Grid>

    )



}


export default ExportedGoodItem;
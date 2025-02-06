import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import { validateMRN } from '../../utils/validateMRN';
import { useState } from 'react';

const GroupOfMRNs = ({ exCount, onClickHandler }) => {

    const [mrnNumber,setMrnNumber] = useState({});
    const [errors,setErrors] = useState({})

    const handleMRNChange  = (e) => {
        const value = e.target.value;
      
    
        setMrnNumber((prev) => ({ ...prev, [e.target.name]: value }))

    }
    

    const onSubmitMRNClickHandler = (e) => {
        e.preventDefault();
        
        const errorCheck = validateMRN(mrnNumber);
        if (Object.values(errorCheck).includes('MRN must be exactly 18 alphanumeric characters')) {
        
            
            setErrors(errorCheck);  
        } else {
            console.log('aal okey');
            
           // onClickHandler();
        }
    };
        
       

    
    console.log(errors);
    

    return (
        <Box
            component="form"
            sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
            noValidate
            autoComplete="off"
            onSubmit={onSubmitMRNClickHandler}
        >
            {[...Array(exCount)].map((_, index) => {
                const mrnKey = `MRN-${index + 1}`; 
                return (
                    <TextField
                        key={mrnKey}
                        label={`MRN ${index + 1}`} 
                        variant="outlined"
                        name={mrnKey}  
                        value={mrnNumber[mrnKey] || ''}  
                        error={errors[mrnKey] === 'MRN must be exactly 18 alphanumeric characters'}
                        helperText={errors[mrnKey] || ''}
                        onChange={handleMRNChange}
                    />
                );
            })}
            <Button variant="contained" endIcon={<SendIcon />} type='submit'  />
        </Box>
    )



}


export default GroupOfMRNs;
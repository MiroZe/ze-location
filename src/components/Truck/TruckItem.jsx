import { useState } from 'react';
import { Box, TextField, Button } from '@mui/material';
import { TimePicker } from '@mui/x-date-pickers';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import { useForm } from '../../hooks/useForm';

const TruckItem = ({ addTruckSubmitHandler }) => {
    const [time, setTime] = useState(dayjs());
    const [error, setError] = useState(
        {
            tsn:false,
            lrn:false,
            truckNumber:false,
            carrier:false,
        }
    );
    const initialValues = {
        tsn: '',
        lrn: '',
        truckNumber: '',
        carrier: '',
    };

    const errorHandler = (e) => {
        if(e.target.value == ''){
            console.log(e.target.value);
            setError(prev => ({...prev, [e.target.name]:true}))
        }
      
    }

    const { formValues, onChangeHandler, clearFormValues } = useForm(initialValues)

    const handleTimeChange = (newTime) => {
        setTime(newTime);
    };

    const handleSubmit = (e) => {

        if (e.target.checkValidity()) {
            addTruckSubmitHandler(e, formValues, time);
            clearFormValues()
          } else {
            alert("Form is invalid! Please check the fields...");
          }
        };
        

    



    return (

        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Box
                component="form"
                sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
                noValidate
                autoComplete="on"
                onSubmit={handleSubmit}
            >

                <TextField id="tsn" label="TSN" variant="filled" name='tsn' onChange={onChangeHandler} value={formValues.tsn} required error={!error.tsn} helperText={error.tsn?'The field is requiered':''} onBlur={errorHandler}/>
                <TextField id="lrn" label="LRN" variant="filled" name='lrn' onChange={onChangeHandler} value={formValues.lrn} required error={error} helperText={error?'The field is requiered':''} onBlur={errorHandler}/>
                <TextField id="truckNumber" name='truckNumber' label="Truck Number" variant="filled" onChange={onChangeHandler} value={formValues.truckNumber} required error={error} helperText={error?'The field is requiered':''} onBlur={errorHandler}/>
                <TextField id="carrier" name='carrier' label="Carrier" variant="filled" onChange={onChangeHandler} value={formValues.carrier} required error={error} helperText={error?'The field is requiered':''} onBlur={errorHandler}/>


                <TimePicker
                    label="Time"
                    ampm={false}
                    value={time}
                    onChange={handleTimeChange}
                    renderInput={(params) => <TextField {...params} variant="filled" />}
                />

                <Button variant="contained" color="success" type="submit">
                    Add
                </Button>
            </Box>
        </LocalizationProvider>

    );
};

export default TruckItem;

import { useState } from 'react';
import { Box, TextField, Button } from '@mui/material';
import { TimePicker } from '@mui/x-date-pickers';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import { useForm } from '../../hooks/useForm';

const TruckItem = ({ addTruckSubmitHandler }) => {
    const [time, setTime] = useState(dayjs());
    const initialValues = {
        tsn: '',
        lrn: '',
        truckNumber: '',
        carrier: '',
    }

    const { formValues, onChangeHandler, clearFormValues } = useForm(initialValues)

    const handleTimeChange = (newTime) => {
        setTime(newTime);
    };

    const handleSubmit = (e) => {
        addTruckSubmitHandler(e, formValues, time);
        clearFormValues()

    }



    return (

        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Box
                component="form"
                sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
                noValidate
                autoComplete="on"
                onSubmit={handleSubmit}
            >

                <TextField id="tsn" label="TSN" variant="filled" name='tsn' onChange={onChangeHandler} value={formValues.tsn} />
                <TextField id="lrn" label="LRN" variant="filled" name='lrn' onChange={onChangeHandler} value={formValues.lrn} />
                <TextField id="truckNumber" name='truckNumber' label="Truck Number" variant="filled" onChange={onChangeHandler} value={formValues.truckNumber} />
                <TextField id="carrier" name='carrier' label="Carrier" variant="filled" onChange={onChangeHandler} value={formValues.carrier} />


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

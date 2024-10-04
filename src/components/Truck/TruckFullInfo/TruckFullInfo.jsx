import {  Button, TextField } from "@mui/material";
import styles from './TruckFullInfo.module.css'
import { TimePicker } from "@mui/x-date-pickers";
import { useState } from "react";
import dayjs from "dayjs";




const TruckFullInfo = ({additionalData,onChangeHandler, }) => {


  const [time, setTime] = useState(dayjs(additionalData.acceptanceTime));
  const handleTimeChange = (newTime) => {
    setTime(newTime);
  };
 


return (
  <div className={styles['truck-info-container']}>
  
    <TextField
              id="mrn"
              label="MRN"
              variant="filled"
              name="mrn"
              onChange={onChangeHandler}
              value={additionalData.mrn}
              required
              sx={{  width: '45ch' }}
              
              
            />
            <TextField
              id="truckNumber"
              name="truckNumber"
              label="Truck Number"
              variant="filled"
              onChange={onChangeHandler}
              value={additionalData.truckNumber}
              required
              
            />
            <TextField
              id="carrier"
              name="carrier"
              label="Carrier"
              variant="filled"
              onChange={onChangeHandler}
              value={additionalData.carrier}
              required
             
            />
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
    
        </div> 


)




}

export default TruckFullInfo;
import {  Button, TextField } from "@mui/material";




const TruckFullInfo = ({additionalData,onChangeHandler, }) => {
 


return (
  <div>
  
    <TextField
              id="mrn"
              label="MRN"
              variant="filled"
              name="mrn"
              onChange={onChangeHandler}
              value={additionalData.mrn}
              required
              
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
            
        <Button variant="contained" color="success" type="submit">
          Add
        </Button>
    
        </div> 


)




}

export default TruckFullInfo;
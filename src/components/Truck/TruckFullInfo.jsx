import { useState } from "react";
import {  TextField } from "@mui/material";



const TruckFullInfo = (tsn,onChangeHandler) => {
  
    const [showLoader,setShowLoader] = useState(true)
    useEffect(() => {
        if (tsn) {  
          getDeclarationById(tsn)
            .then(data => {
              additionalData.carrier = data.declarationResult[0].client;
              additionalData.mrn = data.declarationResult[0].mrn;
              additionalData.truckNumber = data.declarationResult[0].vehicles[0];
           
            
              setShowLoader(false); 
            })
            .catch(error => {
              console.error('Error fetching declaration:', error);
              setShowLoader(false); 
            });
        }
      }, [formValues.tsn,additionalData]); 
  

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
          error={error.lrn}
          helperText={error ? "The field is requiered" : ""}
          onBlur={errorHandler}
        />
        <TextField
          id="truckNumber"
          name="truckNumber"
          label="Truck Number"
          variant="filled"
          onChange={onChangeHandler}
          value={formValues.truckNumber}
          required
          error={error.truckNumber}
          helperText={error ? "The field is requiered" : ""}
          onBlur={errorHandler}
        />
        <TextField
          id="carrier"
          name="carrier"
          label="Carrier"
          variant="filled"
          onChange={onChangeHandler}
          value={formValues.carrier}
          required
          error={error.carrier}
          helperText={error ? "The field is requiered" : ""}
          onBlur={errorHandler}
        />

    </div>

)




}

export default TruckFullInfo;
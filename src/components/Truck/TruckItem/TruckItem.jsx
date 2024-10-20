import { useState } from "react";
import { Box, TextField, Button } from "@mui/material";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import { useForm } from "../../../hooks/useForm";
import TruckFullInfo from "../TruckFullInfo/TruckFullInfo";
import { getDeclarationById } from "../../../services/truckService";
import Spinner from '../../Common/Loader';
import styles from './TruckItem.module.css'
import { getAcceptanceTimestamp } from "../../../utils/getAcceptanceTime";
import useTimeStateStore from "../../../zustand/timeState";


const TruckItem = ({ addTruckSubmitHandler }) => {


  const {setAcceptanceTime}= useTimeStateStore();
  const [showLoader, setShowLoader] = useState(false)
  const [showAdditionalInputs, setShowAdditionalInputs] = useState(false);
  const [error, setError] = useState({
    tsn: false,
    lrn: false,
    truckNumber: false,
    carrier: false,
  });
  const initialValues = {
    tsn: "",
  };

  const [additionalData, setAdditionalData] = useState({
    carrier: '',
    mrn: '',
    truckNumber: '',
    acceptanceTime:''
  });


  const errorHandler = (e) => {
    if (e.target.value == "") {
      console.log(e.target.value);

      setError((prev) => ({ ...prev, [e.target.name]: true }));
    } else {
      setError((prev) => ({ ...prev, [e.target.name]: false }));
    }
  };

  const { formValues, onChangeHandler, clearFormValues } =
    useForm(initialValues);


  const handleSubmit = (e) => {
    if (e.target.checkValidity()) {
      addTruckSubmitHandler(e, formValues,additionalData );
      clearFormValues();
      setShowAdditionalInputs(false)
    } else {
      alert("Form is invalid! Please check the fields...");
    }
  };



  const getAdditionalData = async (tsn) => {

    try {
      if (tsn) {
        setShowLoader(true);
        const additionalTruckData = await getDeclarationById(tsn);
        setAdditionalData({
          carrier: additionalTruckData.declarationResult[0].client,
          mrn: additionalTruckData.declarationResult[0].mrn,
          truckNumber: additionalTruckData.declarationResult[0].vehicles[0],
          acceptanceTime:getAcceptanceTimestamp(additionalTruckData.history)
        });
        setShowLoader(false);
        setShowAdditionalInputs(true);
        setAcceptanceTime(getAcceptanceTimestamp(additionalTruckData.history))
      }


    } catch (error) {
      console.error('Error fetching declaration:', error);
      setShowLoader(false);
    }


  }
  
  

  return (

    <div >
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Box
          component="form"
          sx={{ "& > :not(style)": { m: 1, width: "25ch" } }}
          noValidate
          autoComplete="on"
          onSubmit={handleSubmit}
          className={styles['truck-item-container']}

        >
          <TextField
            id="tsn"
            label="TSN"
            variant="filled"
            name="tsn"
            onChange={onChangeHandler}
            value={formValues.tsn}
            required
            error={error.tsn}
            helperText={error.tsn ? "The field is requiered" : ""}
            onBlur={errorHandler}
          />

          {showAdditionalInputs && <TruckFullInfo onChangeHandler={onChangeHandler} additionalData={additionalData} />}
          <>
            {!showLoader ? <Button className={styles['get-button']} variant="contained" size="small" onClick={() => getAdditionalData(formValues.tsn)}>Get Data</Button> : <Spinner showLoader={showLoader} />}
          </>



        </Box>
      </LocalizationProvider>
    </div>
  );
};

export default TruckItem;

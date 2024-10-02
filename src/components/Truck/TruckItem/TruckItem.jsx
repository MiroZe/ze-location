import { useState } from "react";
import { Box, TextField, Button } from "@mui/material";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import { useForm } from "../../../hooks/useForm";
import TruckFullInfo from "../TruckFullInfo/TruckFullInfo";
import { getDeclarationById } from "../../../services/truckService";
import Spinner from '../../Common/Loader';
import styles from './TruckItem.module.css'


const TruckItem = ({ addTruckSubmitHandler }) => {


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
    truckNumber: ''
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
      addTruckSubmitHandler(e, formValues );
      clearFormValues();
    } else {
      alert("Form is invalid! Please check the fields...");
    }
  };



  const getAdditionalData = async (tsn) => {




    try {
      if (tsn) {
        setShowLoader(true);
        const additionlTruckData = await getDeclarationById(tsn);
        setAdditionalData({
          carrier: additionlTruckData.declarationResult[0].client,
          mrn: additionlTruckData.declarationResult[0].mrn,
          truckNumber: additionlTruckData.declarationResult[0].vehicles[0]
        });
        setShowLoader(false);
        setShowAdditionalInputs(true);
      }


    } catch (error) {
      console.error('Error fetching declaration:', error);
      setShowLoader(false);
    }

    console.log(showAdditionalInputs);


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
            {!showLoader ? <Button onClick={() => getAdditionalData(formValues.tsn)}>Get Data</Button> : <Spinner showLoader={showLoader} />}
          </>



        </Box>
      </LocalizationProvider>
    </div>
  );
};

export default TruckItem;

import { Box, TextField, Button } from "@mui/material";
import styles from "./Barcode.module.css";
import { useForm } from "../../hooks/useForm";
import { useState } from "react";
import Spinner from "../Common/Loader";
import { getDeclarationBarcodesById } from "../../services/declarationService";

const Barcodes = () => {
  const [error, setError] = useState({ tsn: false });
  const [showLoader, setShowLoader] = useState(false);

  const initialValues = {
    tsn: "",
  };

  const { formValues, onChangeHandler, clearFormValues } =
    useForm(initialValues);

  const errorHandler = (e) => {
    if (e.target.value == "") {
      setError((prev) => ({ ...prev, [e.target.name]: true }));
    } else {
      setError((prev) => ({ ...prev, [e.target.name]: false }));
    }
  };

  const getExportMrns = async (tsn) => {

    const result = await getDeclarationBarcodesById(tsn);
    console.log(result);
    

  }

  return (
    <Box
      component="form"
      sx={{ "& > :not(style)": { m: 1, width: "25ch" } }}
      noValidate
      autoComplete="on"
      className={styles["truck-item-container"]}
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

      <>
        {!showLoader ? (
          <Button
            className={styles["get-button"]}
            variant="contained"
            size="small"
            onClick={() => getExportMrns(formValues.tsn)}
          >
            Get Barcodes
          </Button>
        ) : (
          <Spinner showLoader={showLoader} />
        )}
      </>
    </Box>
  );
};

export default Barcodes;

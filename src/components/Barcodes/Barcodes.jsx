import { Box, TextField, Button } from "@mui/material";
import styles from './Barcode.module.css'



const Barcodes = () => {

return (
    <Box
    component="form"
    sx={{ "& > :not(style)": { m: 1, width: "25ch" } }}
    noValidate
    autoComplete="on"
    
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

    
    <>
      {!showLoader ? <Button className={styles['get-button']} variant="contained" size="small" onClick={() => getAdditionalData(formValues.tsn)}>Get Barcodes</Button> : <Spinner showLoader={showLoader} />}
    </>



  </Box>
)

}

export default Barcodes;
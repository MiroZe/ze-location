import FormGroup from "@mui/material/FormGroup";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Button from "@mui/material/Button";
import { useState } from "react";
import styles from "./Login.module.css";
import { Box } from "@mui/material";
import { useForm } from "../../../hooks/useForm";

export const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const initialLoginValues = {
    username: "",
    password: "",
  };
  const { formValues, onChangeHandler, clearFormValues } =
    useForm(initialLoginValues);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (e) => {
    e.preventDefault();
    
  };

  const handleMouseUpPassword = (e) => {
    e.preventDefault();
  };

  const onClickLoginHandler = (e) => {
    e.preventDefault();
    console.log(formValues);
    clearFormValues()
  };

  return (
    <div className={styles["login-container"]}>
      <h3>Login form</h3>

      <Box component="form" onSubmit={onClickLoginHandler}>
        <FormGroup>
          <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined" required>
            <InputLabel htmlFor="outlined-adornment-password">
              Tnet Username
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-username"
              type="text"
              endAdornment={
                <AccountCircleIcon position="end"></AccountCircleIcon>
              }
              label="username"
              onChange={onChangeHandler}
              name="username"
              value={formValues.username}
            />
          </FormControl>
          <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined" required>
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              name="password"
              value={formValues.password}
              onChange={onChangeHandler}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    onMouseUp={handleMouseUpPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
          <Button variant="contained" type="submit">
            Log in
          </Button>
        </FormGroup>
      </Box>
    </div>
  );
};

export default Login;

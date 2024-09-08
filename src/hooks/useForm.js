import { useState } from "react";

export const useForm = (initialValues) => {
   
  
    const [formValues, setFormValues] = useState(initialValues);
    

    const onChangeHandler = (e) => {
        setFormValues(state => ({ ...state, [e.target.name]: e.target.value }));
    };
    
    const clearFormValues = () => {
        setFormValues(initialValues)
    }
   
    return {
        formValues,
        onChangeHandler,
        clearFormValues
    };
};
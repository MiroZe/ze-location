import { useCallback, useEffect, useState } from "react";
import { euCountries } from "../constants/euCountries,js";


// export const useForm = (initialValues) => {

   
  
//     const [formValues, setFormValues] = useState(initialValues);
    

//     const onChangeHandler = (e) => {
       
        
//         setFormValues(state => ({ ...state, [e.target.name]: e.target.value }));
//     };
    
//     const clearFormValues = () => {
//         setFormValues(initialValues)
//     }
   
//     return {
//         formValues,
//         onChangeHandler,
//         clearFormValues,
//         setFormValues
//     };
// };




// You can define your valid countries here (e.g., valid country codes or country names)



export const useForm = (initialValues) => {
    const [formValues, setFormValues] = useState(initialValues);
    const [errors, setErrors] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
 
    const onChangeHandler = (e) => {
        const { name, value } = e.target;
     
        setFormValues((prevState) => ({
            ...prevState,
            [name]: value,
        }));
        
        setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: undefined,
        }));
    };
    
    const clearFormValues = () => {
        setFormValues(initialValues);
        setErrors({});
        setIsSubmitted(false);
    };
    
    
    const validateFields = useCallback(() => {
        const mrnPattern = /^[A-Z0-9]{18}$/;
        const validationErrors = {};
        
        
        
        Object.entries(formValues).forEach(([key, value]) => {
           
            if (key === 'consignorID' || key === 'consigneeID') {
                return;
            }
           
           
            if (!value && value !== 0) { 
                validationErrors[key] = "This field is required";
            }
          
            else if (key === "mrnNumber" && !mrnPattern.test(value)) {
                validationErrors[key] = "Invalid MRN format (18 uppercase alphanumeric)";
            }
            
            else if ((key === 'codeOfCountryOfExport' || key === 'countryCodeOfDestination') && 
                     typeof euCountries !== 'undefined' && !euCountries[value]) {
                    validationErrors[key] = "Invalid country code";
            }
        });
        
        return validationErrors;
    }, [formValues]); 
    
   
    useEffect(() => {
        if (isSubmitted) {
            
            const updatedErrors = validateFields();
            setErrors(updatedErrors);
        }
    }, [isSubmitted, validateFields]); 
    
    const handleSubmit = (e) => {
        if (e) {
            e.preventDefault();
        }
        
       
        setIsSubmitted(true);
        
     
        const validationErrors = validateFields();
        
       
        setErrors(validationErrors);
        
        
        const isValid = Object.keys(validationErrors).length === 0;
        
       
        
        return isValid;
    };
    
    return {
        formValues,
        errors,
        onChangeHandler,
        validateFields,
        clearFormValues,
        handleSubmit,
        isSubmitted
    };
};

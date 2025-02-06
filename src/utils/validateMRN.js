




export const validateMRN = (mrnValues) => {

    const pattern = /^[A-Z0-9]{18}$/
    

    const check = Object.entries(mrnValues).reduce((acc, [index, value]) => {
       
        if (!pattern.test(value)) {
            acc[index] = 'MRN must be exactly 18 alphanumeric characters';  // Assign error message
        } else {
            acc[index] = 'ok';  
        }
        return acc;
    }, {});  

    return check;

  
};

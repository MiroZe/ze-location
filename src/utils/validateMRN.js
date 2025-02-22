



export const validateFields = (fields) => {
    const mrnPattern = /^[A-Z0-9]{18}$/;

    return Object.entries(fields).reduce((errors, [key, value]) => {
        if (key === 'consignorID' || key === 'consigneeID') {
            
            return errors;
        }

        if (!value) {
            errors[key] = "This field is required";
        } else if (key === "mrnNumber" && !mrnPattern.test(value)) {
            errors[key] = "Invalid MRN format (must be 18 uppercase letters/numbers)";
        }

        return errors;
    }, {});
};


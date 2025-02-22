



export const validateFields = (fields) => {
    const errors = {};
    const mrnPattern = /^[A-Z0-9]{18}$/;

    for (const key in fields) {
        if (!fields[key]) {
            errors[key] = "This field is required";
        } else if (key === "mrnNumber" && !mrnPattern.test(fields[key])) {
            errors[key] = "Invalid MRN format (must be 18 uppercase letters/numbers)";
        }
    }

    return errors;
};

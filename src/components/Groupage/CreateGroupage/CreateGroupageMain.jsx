import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/material/styles';
import { useForm } from '../../../hooks/useForm';
import { useState } from 'react';




const CreateGroupageMain = () => {


    const VisuallyHiddenInput = styled('input')({
        clip: 'rect(0 0 0 0)',
        clipPath: 'inset(50%)',
        height: 1,
        overflow: 'hidden',
        position: 'absolute',
        bottom: 0,
        left: 0,
        whiteSpace: 'nowrap',
        width: 1,
      });

    const initialVallues = {
        exCount: 0,
        tsn: '',
        filePath: ''
    }

    const [filePathName, setFilePathName] = useState('')

    const {formValues,onChangeHandler} = useForm(initialVallues)

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setFilePathName(file.name);
        }
      };
      
    console.log(formValues);

    

return (
  <div>
    <div>
    <TextField id="outlined-basic" label="TSN" variant="outlined" name='tsn' onChange={onChangeHandler} value={formValues.tsn} />
    <TextField id="outlined-basic" label="Брой EX" variant="outlined" type='number' name='exCount' value={formValues.exCount} onChange={onChangeHandler} />

    </div>

    <div>
    <TextField id="outlined-basic" label="filepath" variant="outlined" name='filePath' disabled onChange={onChangeHandler} value={filePathName} />
    <Button
      component="label"
      role={undefined}
      variant="contained"
      tabIndex={-1}
      startIcon={<CloudUploadIcon />}
    >
      Upload file
      <VisuallyHiddenInput
        type="file"
        onChange={handleFileChange}
        multiple
      />
    </Button>
    </div>
  </div>
)

}


export default CreateGroupageMain;
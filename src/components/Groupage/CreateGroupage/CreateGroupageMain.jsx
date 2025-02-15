import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/material/styles';
import { useForm } from '../../../hooks/useForm';
import { useState } from 'react';
import { getDataFromTextFile } from '../../../services/declarationService';




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
       
    }

    const [file, setFile] = useState({})

    const {formValues,onChangeHandler} = useForm(initialVallues)

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        console.log(file);
        if (file) {
            setFile(file);
        }
      };

    const handleFileUpload = async() => {

        if (file) {
            const formData = new FormData();
            formData.append('file',file)
        const data =  await getDataFromTextFile(formData);
        console.log(data);
        


    }
}

    

return (
  <div>
    <div>
    <TextField id="outlined-basic" label="TSN" variant="outlined" name='tsn' onChange={onChangeHandler} value={formValues.tsn} />
    <TextField id="outlined-basic" label="Брой EX" variant="outlined" type='number' name='exCount' value={formValues.exCount} onChange={onChangeHandler} />

    </div>

    <div>
    <TextField id="outlined-basic" variant="outlined" name='filePath' disabled onChange={onChangeHandler} value={file.name} />
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
    <Button variant='contained' color='success' onClick={handleFileUpload}>
        
        Load Data
    </Button>
  </div>
)

}


export default CreateGroupageMain;
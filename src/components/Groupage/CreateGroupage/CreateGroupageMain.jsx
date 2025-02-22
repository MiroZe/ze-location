import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/material/styles';
import { useForm } from '../../../hooks/useForm';
import { useCallback,  useState } from 'react';
import { getDataFromTextFile } from '../../../services/declarationService';
import ExportDeclarationTraders from './ExportDeclarationTraders';
import ExportedGoodItems from './ExportedGoodItems';
import useDeclarationStateStore from '../../../zustand/declarationState';
import styles from './CreateGroupageMain.module.css'
import { validateFields } from '../../../utils/validateMRN';




const CreateGroupageMain = () => {

  const {addDeclaration,addGoodItemsToDeclaration, clearAllDeclarations } = useDeclarationStateStore();
  const[disabled,setDisabled] = useState(true)


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

    tsn: '',
    mrnNumber: '',
  }

  const [file, setFile] = useState({});
 
  const [showDataComponent, setShowDataComponent] = useState(0)
  const [exportData, setExportData] = useState(null);
  const { formValues, onChangeHandler } = useForm(initialVallues);
 
  const [errors,setErrors] = useState({});

 

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      setFile(file);
      setDisabled(false)
   
      
    }
  };

  const handleFileUpload = async () => {

      const validationErrors = validateFields(formValues);
    setErrors(validationErrors);
    
    if (Object.keys(validationErrors).length > 0) {
        console.log('Validation failed:', validationErrors);
        return; // Stop execution if errors exist
    }

    if (!file) {
        console.log('No file selected.');
        return;
    }

   
    setDisabled(true);

    try {
        const formData = new FormData();
        formData.append('file', file);
        
        const data = await getDataFromTextFile(formData);

        
      
        setShowDataComponent(1);
     
        setExportData(data);
     
       
        
    } catch (error) {
        console.error('File upload failed:', error);
        setDisabled(false); 
    }
};


  const handleCleaAllDecalarations = () => {
    clearAllDeclarations()
  }


        
  
  const handleComponentChange = useCallback((e,number, traderData, goodItemsData)  => {
    e.preventDefault();
    setShowDataComponent(number);
    

    const newDeclarationIndex = 0;
    addDeclaration({
      ...traderData,
      goodItems: [] 
    });
    if (goodItemsData && goodItemsData.length > 0) {
      addGoodItemsToDeclaration(newDeclarationIndex, goodItemsData);
    }
    
  },[addDeclaration,addGoodItemsToDeclaration,setShowDataComponent ])





  return (
    <div >
      <div className={styles['form-container']}>

    
      <div className={styles['input-container']}>
        <TextField id="outlined-basic"
         label="TSN" variant="outlined" 
         name='tsn' 
         onChange={onChangeHandler}
         value={formValues.tsn}
         error={!!errors.tsn}
         helperText={errors.tsn} />
        <TextField id="outlined-basic" label="MRN" variant="outlined"
         name='mrnNumber'
          onChange={onChangeHandler}
           value={formValues.mrnNumber}
           error={!!errors.mrnNumber}
         helperText={errors.mrnNumber} />
         
            

      </div>

      <div className={styles['button-container']}>
        <TextField id="outlined-basic" variant="outlined" name='fileName' disabled onChange={onChangeHandler} value={file.name} />
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
        <Button variant='contained' color='error' onClick={handleCleaAllDecalarations}>
        Clear
      </Button>
      </div>
      </div>
      <Button style={{marginBottom:'0.9em'}} variant='contained' color='success' onClick={handleFileUpload} disabled={disabled}>
        Load Data
      </Button>
      
      {showDataComponent === 1 && <ExportDeclarationTraders exportData={exportData} handleComponentChange={handleComponentChange}/>}
      {showDataComponent === 2 && <ExportedGoodItems goodItems = {exportData.parsedData['Good Items']} mrn={formValues.mrnNumber} />} 
    </div>
  )

}


export default CreateGroupageMain;
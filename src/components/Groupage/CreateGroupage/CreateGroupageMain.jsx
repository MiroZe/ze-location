import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/material/styles';
import { useForm } from '../../../hooks/useForm';
import { useCallback, useState } from 'react';
import { getDataFromTextFile } from '../../../services/declarationService';
import ExportDeclarationTraders from './ExportDeclarationTraders';
import ExportedGoodItems from './ExportedGoodItems';
import useDeclarationStateStore from '../../../zustand/declarationState';




const CreateGroupageMain = () => {

  const {addDeclaration,addGoodItemsToDeclaration } = useDeclarationStateStore();


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
    mrnNumber: ''

  }

  const [file, setFile] = useState({});

  const [showDataComponent, setShowDataComponent] = useState(0)
  
  
  const [exportData, setExportData] = useState(null);
  

  const { formValues, onChangeHandler } = useForm(initialVallues);

 

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      setFile(file);
    }
  };

  const handleFileUpload = async () => {

    if (file) {
      const formData = new FormData();
      formData.append('file', file)
      const data = await getDataFromTextFile(formData);
      setShowDataComponent(1)
      setExportData(data);



    }
  }

        
  
  const handleComponentChange = useCallback((number, traderData, goodItemsData)  => {
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
    <div>
      <div>
        <TextField id="outlined-basic" label="TSN" variant="outlined" name='tsn' onChange={onChangeHandler} value={formValues.tsn} />
        <TextField id="outlined-basic" label="MRN" variant="outlined" name='mrnNumber' onChange={onChangeHandler} value={formValues.mrnNumber} />

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
      {showDataComponent === 1 && <ExportDeclarationTraders exportData={exportData} handleComponentChange={handleComponentChange}/>}
      {showDataComponent === 2 && <ExportedGoodItems goodItems = {exportData.parsedData['Good Items']}/>} 
    </div>
  )

}


export default CreateGroupageMain;
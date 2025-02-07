
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useState } from 'react';




const MRNTab = ({exCount, mrnNumbers}) => {
    const mrnValues = Object.values(mrnNumbers)
    

    const [value, setValue] = useState(0);
    
    
      const handleChange = (event, newValue) => {
        console.log(newValue);
        
        setValue(newValue);
      };



  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <Tabs value={value} onChange={handleChange} centered>
       
        {exCount > 0 && [...Array(exCount)].map((_,index) =>  <Tab key={index} label={mrnValues[index]} />)}
        
      </Tabs>
    </Box>
  );
}



export default MRNTab
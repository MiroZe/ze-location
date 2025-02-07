
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useState } from 'react';
import styles from './MRNTab.module.css'
import CreateGroupageDeclartion from './CreateGroupageDeclartion';
import { Typography } from '@mui/material';




const MRNTab = ({exCount, mrnNumbers}) => {
    const mrnValues = Object.values(mrnNumbers)
    

    const [value, setValue] = useState(0);
    
    
      const handleChange = (event, newValue) => {
        console.log(newValue);
        
        setValue(newValue);
      };



  return (
    
        <Box sx={{ width: "100%", bgcolor: "background.paper" }} className={styles["tab-container"]}>
        
          <Tabs value={value} onChange={handleChange} centered>
            {exCount > 0 && [...Array(exCount)].map((_, index) => (
              <Tab key={index} label={mrnValues[index]} />
            ))}
          </Tabs>
    
         
          {exCount > 0 && [...Array(exCount)].map((_, index) => (
            <TabPanel key={index} value={value} index={index}>
              <CreateGroupageDeclartion mrn={mrnValues[index]} />
            </TabPanel>
          ))}
        </Box>
      );
  
}

const TabPanel = ({ children, value, index }) => {
    return (
      <Box role="tabpanel" hidden={value !== index} sx={{ p: 3 }} >
        {value === index && <Typography>{children}</Typography>}
      </Box>
    );
  };



export default MRNTab;
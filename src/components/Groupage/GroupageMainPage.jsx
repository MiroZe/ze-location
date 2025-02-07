
import TextField from '@mui/material/TextField';


import { useState } from 'react';
import MRNTab from './MRNTab';
import styles from './GroupageMainPage.module.css'
import GroupOfMRNs from './GroupOfMRNs';




const GroupageMainPage = () => {


    const [exCount, setExCount] = useState(0);
    const [showExCounter, setShowExCounter] = useState(true);
    const [showTabs, setShowTabs] = useState(false);
    const [mrnNumbers, setMrnNumber] = useState({})
  
    const exCountHandler = (e) => {

        const value = parseInt(e.target.value)
    
        setExCount(value)
    };

    const onClickHandler = (mrnNumber) => {
     
        if(exCount > 0) {
            setShowTabs(true)
            setShowExCounter(false)
        }
        
      
        setMrnNumber(mrnNumber)
        
    }
   
    
 
    return (

        <div className={styles['groupage-main-container']}>

           {showExCounter &&  <TextField id="outlined-basic" label="Брой EX" variant="outlined" type='number' name='exCount' value={exCount} onChange={exCountHandler} />}
            
            {exCount > 0 && showExCounter && <GroupOfMRNs exCount={exCount} onClickHandler={onClickHandler}/>}
          

            {showTabs && <MRNTab exCount={exCount} mrnNumbers={mrnNumbers}/>}

        </div>


    )

};


export default GroupageMainPage;
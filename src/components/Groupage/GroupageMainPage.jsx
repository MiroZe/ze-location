
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { useState } from 'react';
import MRNTab from './MRNTab';
import styles from './GroupageMainPage.module.css'




const GroupageMainPage = () => {


    const [exCount, setExCount] = useState(0);
    const [showTabs, setShowTabs] = useState(false)
    const exCountHandler = (e) => {

        const value = parseInt(e.target.value)
    
        setExCount(value)
    };

    const onClickHandler = () => {
        exCount > 0 ? setShowTabs(true) : ''
        
    }
   
    
 
    return (

        <div className={styles['groupage-main-container']}>

            <TextField id="outlined-basic" label="Брой EX" variant="outlined" type='number' name='exCount' value={exCount} onChange={exCountHandler} />
            {exCount > 0 && [...Array(exCount)].map( (_,index) => <TextField required key={index} label="MRN" variant="outlined" name={`mrn-${index}`}  />)}
            <Button variant="contained" endIcon={<SendIcon />} onClick={onClickHandler}/>

            {showTabs && <MRNTab exCount={exCount}/>}

        </div>


    )

};


export default GroupageMainPage;
import { useTimer } from 'react-timer-hook';
import styles from './TruckTimer.module.css'
import { Button } from '@mui/material';
import useTimeStateStore from '../../zustand/timeState';
import { useEffect, useMemo } from 'react';


function MyTimer() {


  const { elapsedTime } = useTimeStateStore();
    const expiryTime = new Date();
    const expiryTimestamp = elapsedTime;
    
   
    const hasExpire = (expiryTimestamp) => {
        
        return expiryTime > expiryTimestamp;
    }

    
  const {
    seconds,
    minutes,
    hours,
  
  } = useTimer({ expiryTimestamp, onExpire: () => hasExpire() });
 

  
  return (
    <div className={styles['timer-container']} >
      <div className={styles['time-container']}>
      <span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
      </div>
      <div className={styles['time-container-status']}>
      {(seconds + minutes) !== 0 ?  <Button style={{backgroundColor:'red'}} >In Progress</Button> :<Button style={{backgroundColor:'green', marginLeft:'0.5em'}} >Ready</Button>  }

      </div>
  
    </div>
  );

  
}

const TruckTimer = () => {

  const {addElapsedTime} = useTimeStateStore();

  const time = useMemo(()=> {
    const newTime =  new Date();
    newTime.setSeconds(newTime.getSeconds() + 3600); 
    return newTime;
  },[])

  useEffect(()=> {
    if(time) {

      addElapsedTime(time)
    }
  },[time,addElapsedTime])


 
  
  return (
    // <div>
    //   <MyTimer expiryTimestamp={time}  />
    // </div>
    <div>
      <MyTimer  />
    </div>
  );
}

export default TruckTimer;
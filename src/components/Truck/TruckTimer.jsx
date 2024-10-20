import { useTimer } from 'react-timer-hook';
import styles from './TruckTimer.module.css'
import { Button } from '@mui/material';
import useTimeStateStore from '../../zustand/timeState';




function MyTimer({expiryTimestamp}) {



   
    const hasExpire = (expiryTimestamp) => {
        
        return expiryTimestamp <= 0;
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

  const { initialTimes } = useTimeStateStore();
  const newTime = initialTimes.acceptanceTime;
  
  
  const currentTime = new Date();
  const remainedTime =new Date(currentTime - new Date(newTime));

  
  return (
    <div>
      <MyTimer expiryTimestamp={remainedTime}  />
    </div>
   
  );
}

export default TruckTimer;
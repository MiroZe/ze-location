import { useTimer } from 'react-timer-hook';
import styles from './TruckTimer.module.css'
import { Button } from '@mui/material';


function MyTimer({ expiryTimestamp }) {

  
    const expiryTime = new Date()
    
   
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

    

  const time = new Date();
  time.setSeconds(time.getSeconds() + 3600); 

 
  
  return (
    <div>
      <MyTimer expiryTimestamp={time}  />
    </div>
  );
}

export default TruckTimer;
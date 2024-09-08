import { useTimer } from 'react-timer-hook';
import styles from './TruckTimer.module.css'
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
function MyTimer({ expiryTimestamp }) {
  const {
    
    seconds,
    minutes,
    hours,
  

    start,
    pause,
    resume,
    restart,
  } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });


  return (
    <div className={styles['timer-container']} >
      <div className={styles['time-container']}>
      <span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
      </div>
     <div className={styles['time-actions-container']}>
        <ButtonGroup size='small' variant="contained">
      <Button onClick={start}>Start</Button>
      <Button onClick={pause}>Pause</Button>
      <Button onClick={resume}>Resume</Button>
      <Button onClick={() => {
       
        const time = new Date();
        time.setSeconds(time.getSeconds() + 3600);
        restart(time)
      }}>Restart</Button>
      </ButtonGroup>
      </div>
    </div>
  );
}

const TruckTimer = () => {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 3600); 
  return (
    <div>
      <MyTimer expiryTimestamp={time} />
    </div>
  );
}

export default TruckTimer;
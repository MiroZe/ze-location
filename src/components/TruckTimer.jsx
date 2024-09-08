import { useTimer } from 'react-timer-hook';
import styles from './TruckTimer.module.css'
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
      <button onClick={start}>Start</button>
      <button onClick={pause}>Pause</button>
      <button onClick={resume}>Resume</button>
      <button onClick={() => {
       
        const time = new Date();
        time.setSeconds(time.getSeconds() + 3600);
        restart(time)
      }}>Restart</button>
      </div>
    </div>
  );
}

const TruckTimer = () => {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 3600); // 10 minutes timer
  return (
    <div>
      <MyTimer expiryTimestamp={time} />
    </div>
  );
}

export default TruckTimer;
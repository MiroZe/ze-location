
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';


const Spinner = ({showLoader}) => {
 
  return (
    <div>
      
      <Backdrop
        sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
        open={showLoader}
       
        
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}

export default Spinner;
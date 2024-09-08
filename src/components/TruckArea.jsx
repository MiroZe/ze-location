import { useState } from "react";
import TruckItem from "./TruckItem";
import TruckList from "./TruckList";


const TruckArea = () => {

    const [truckList, setTruckList] = useState([]);
  
  


    const addTruckSubmitHandler = (e,formValues,time) => {

        e.preventDefault();
        const truckTime = {hour:time.$H,mins:time.$m}
        setTruckList(prevState => [...prevState,{formValues,truckTime}])
          
        
    }
    


    return(

        <>
        <TruckItem addTruckSubmitHandler={addTruckSubmitHandler}/>
        <TruckList truckList={truckList}/>
        </>
    )



}

export default TruckArea;
import { useState } from "react";
import TruckItem from "./TruckItem/TruckItem";
import TruckList from "./TruckList/TruckList";
import dayjs from "dayjs";


const TruckArea = () => {

    const [truckList, setTruckList] = useState([]);
  
  


    const addTruckSubmitHandler = (e,formValues,additionalData) => {

        e.preventDefault();
        
       
        
        const truckTime = dayjs(additionalData.acceptanceTime);
        const formattedTruckTime = truckTime.format('HH:mm');
       
        
        setTruckList(prevState => [...prevState,{formValues,...additionalData,formattedTruckTime}])
        
    }
    


    return(

        <>
        <TruckItem addTruckSubmitHandler={addTruckSubmitHandler}/>
        <TruckList truckList={truckList}/>
        </>
    )



}

export default TruckArea;
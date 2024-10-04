import { useState } from "react";
import TruckItem from "./TruckItem/TruckItem";
import TruckList from "./TruckList";
import dayjs from "dayjs";


const TruckArea = () => {

    const [truckList, setTruckList] = useState([]);
  
  


    const addTruckSubmitHandler = (e,formValues,additionalData) => {

        e.preventDefault();
        const truckData = {...formValues,...additionalData}
        const truckAcceptanceTime = dayjs(additionalData.acceptanceTime);
        
       setTruckList(prevState => [...prevState,{truckData,truckAcceptanceTime}])
        
    }
    


    return(

        <>
        <TruckItem addTruckSubmitHandler={addTruckSubmitHandler}/>
        <TruckList truckList={truckList}/>
        </>
    )



}

export default TruckArea;
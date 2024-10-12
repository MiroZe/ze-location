import { useState } from "react";
import TruckItem from "./TruckItem/TruckItem";
import TruckList from "./TruckList/TruckList";
import dayjs from "dayjs";
import { addItemToTruckList } from "../../services/truckService";


const TruckArea = () => {

    const [truckList, setTruckList] = useState([]);
  
  


    const addTruckSubmitHandler = async(e,formValues,additionalData) => {

        e.preventDefault();
        
        try {
            await addItemToTruckList({formValues,additionalData})
            const truckTime = dayjs(additionalData.acceptanceTime);
            const formattedTruckTime = truckTime.format('HH:mm');
           
            
            setTruckList(prevState => [...prevState,{formValues,...additionalData,formattedTruckTime}])
            
        } catch (error) {
            console.log(error);
            
        }
       
       
        
        
    }
    


    return(

        <>
        <TruckItem addTruckSubmitHandler={addTruckSubmitHandler}/>
        <TruckList truckList={truckList}/>
        </>
    )



}

export default TruckArea;
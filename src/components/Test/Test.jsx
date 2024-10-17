import {  getTodayTruckList } from "../../services/truckService"



const Test = () => {

    const onSubmitTestHandler = async () => {
        await getTodayTruckList()

    }

    return (
        <div>
            <h4>Test</h4>
            <button onClick={() => onSubmitTestHandler()}>Send Test</button>
        </div>
    )




}
export default Test
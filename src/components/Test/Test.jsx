import { getDeclarationById } from "../../services/truckService"



const Test = () => {

    const onSubmitTestHandler = async (tsn) => {
        await getDeclarationById(tsn)

    }

    return (
        <div>
            <h4>Test</h4>
            <button onClick={() => onSubmitTestHandler('11-303261-24-485-CT-01M')}>Send Test</button>
        </div>
    )




}
export default Test
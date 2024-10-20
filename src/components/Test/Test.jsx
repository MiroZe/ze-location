import { getDeclarationBarcodesById } from "../../services/declarationService"




const Test = () => {

    const onSubmitTestHandler = async () => {
        const result = await getDeclarationBarcodesById('8-2625824-24-402-CT-01M ')
        console.log(result);
        

    }

    return (
        <div>
            <h4>Test</h4>
            <button onClick={() => onSubmitTestHandler()}>Send Test</button>
        </div>
    )




}
export default Test
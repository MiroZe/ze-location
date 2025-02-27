import useDeclarationStateStore from "../../../../zustand/declarationState";
import styles from './ProcessStatus.module.css'



export const ProcessStatus = () => {

    const{declarations } = useDeclarationStateStore();
    const declarationsLength = declarations.length
    
    


    return (
        <div className={styles['status-container']}>
            <h5>Обработени декларации:</h5>
            {declarationsLength <= 0 ? <p>Все още няма обработени декларации</p>:
            
            <ul>
               { declarations.map((d,index) => <li key={index}>{index + 1}. {d.mrnNumber}</li>)}
            </ul>
            }

        </div>
        )



}

export default ProcessStatus;
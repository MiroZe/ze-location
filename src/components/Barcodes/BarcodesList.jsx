import Barcode from 'react-barcode';
import styles from './Barcodes.module.css';



const BarcodesList = ({list}) => {

    return (
        <div className={styles['barcode-items-container']}>

        {list.map( (i,index) => <Barcode
       key={index + 1} value={i} width={2} /> )}
        </div>
    )



}


export default BarcodesList;
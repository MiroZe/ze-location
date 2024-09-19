
import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import logo from '../../assets/sgs-logo.png'

const Header = () => {

return (
    <div className={styles['header-container']}>
        <div className={styles['logo-container']}>
            <img src={logo} alt="SGS" />
        </div>
        <div className={styles['menu-container']}>
            <ul>
                <li >
                    <Link to={'/'}>Home</Link>
                </li>
                
                <li>
                    <Link to={'/dashboard'}>Menu</Link>
                </li>
                <li>
                    <Link>Login</Link>
                </li>
                <li>
                    <Link>Register</Link>
                </li>
                <li>
                    <Link>Logout</Link>
                </li>
                <li>
                    <Link>About</Link>
                </li>
            </ul>
        </div>

    </div>


)


}

export default Header;
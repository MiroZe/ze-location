
import styles from './Header.module.css';
import { Link } from '@mui/material';

const Header = () => {

return (
    <div className={styles['header-container']}>
        <div className={styles['logo-container']}>
            <img src="" alt="" />
        </div>
        <div className={styles['menu-container']}>
            <ul>
                <li>
                    <Link>Home</Link>
                </li>
                
                <li>
                    <Link>Menu</Link>
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
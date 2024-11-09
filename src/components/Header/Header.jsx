import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import logo from "../../assets/sgs-logo.png";
import useUserStore from "../../zustand/userState";
import UserMenu from "./UserMenu";

const Header = () => {
  const { user } = useUserStore();


  return (
    <div className={styles["header-container"]}>
      <div className={styles["logo-container"]}>
        <img src={logo} alt="SGS" />
      </div>
      <div className={styles["menu-container"]}>
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          {user && (
            <>
             <UserMenu/>
              <li>
                <Link to={'/auth/logout'}>Logout</Link>
              </li>
            </>
          )}
          {!user && (
            <li>
              <Link to={"/auth/login"}>Login</Link>
            </li>
          )}

          <li>
            <Link to={"/about"}>About</Link>
          </li>
        </ul>
      </div>
      <p>Welcome,  
        <span>{user? ` ${user}`: ' Guest'}</span></p>
    </div>
  );
};

export default Header;

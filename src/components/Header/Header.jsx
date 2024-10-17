import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import logo from "../../assets/sgs-logo.png";
import useUserStore from "../../zustand/userState";

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
              <li>
                <Link to={"/dashboard"}>Menu</Link>
              </li>
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
      <p>Welcome, {user? user: 'Guest'}</p>
    </div>
  );
};

export default Header;

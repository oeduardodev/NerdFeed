import styles from "./Header.module.css";
import logo from "../assets/nerdfeed-logo.png"

function Header() {
  return (
    <header className={styles.Header}>
     <img src={logo} alt="" />
    </header>
  );
}

export default Header
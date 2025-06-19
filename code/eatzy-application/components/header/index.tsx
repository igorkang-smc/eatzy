import styles from "./index.module.css";
import Logo from "components/header/logo";
import AuthElement from "components/header/auth-element";
import {JSX} from "react";
const Header = (): JSX.Element => {
  return (
    <header className={styles.root}>
      <div className="layout-grid">
        <Logo />
        <AuthElement />
      </div>
    </header>
  );
};
export default Header;

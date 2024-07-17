import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <nav className={styles.nav}>
      <Link to="/" className={styles.link}>
        <span className={`${styles.span} ${styles.spanLogo}`}>MovieLover</span>
      </Link>

      <SearchBar />
      <Link to="/movies" className={styles.link}>
        {" "}
        <span className={styles.span}>Movies</span>{" "}
      </Link>
      <Link to="/my-movies" className={styles.link}>
        {" "}
        <span className={styles.span}>Collection</span>{" "}
      </Link>
      <Link to="/sign-up" className={styles.link}>
        <button className={styles.signUpButton}>Sign up</button>
      </Link>
    </nav>
  );
};

export default Header;

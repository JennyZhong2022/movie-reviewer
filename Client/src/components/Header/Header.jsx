import React from "react";
import { NavLink } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <nav className={styles.nav}>
      <NavLink to="/" className={styles.link}>
        <span className={`${styles.span} ${styles.spanLogo}`}>MovieLover</span>
      </NavLink>

      <SearchBar />

      {/* <NavLink to="/movies-search" className={styles.link}>
        {" "}
        <span className={styles.span}>Movies</span>{" "}
      </NavLink> */}
      <NavLink to="/my-movies" className={styles.link}>
        {" "}
        <span className={styles.span}>Collection</span>{" "}
      </NavLink>
      <NavLink to="/sign-up" className={styles.link}>
        <button className={styles.signUpButton}>Sign up</button>
      </NavLink>
    </nav>
  );
};

export default Header;

import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import styles from "./Header.module.scss";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleShowMenuBtn = () => {
    setShowMenu(!showMenu);
    console.log("menu clicked");
  };

  console.log(showMenu);

  return (
    <nav className={styles.nav}>
      <NavLink to="/" className={styles.logoLink}>
        <span className={styles.logoSpan}>MovieLover</span>
      </NavLink>

      <SearchBar />

      {/* <NavLink to="/movies-search" className={styles.link}>
        {" "}
        <span className={styles.span}>Movies</span>{" "}
      </NavLink> */}

      <div className={styles.menuWrapper}>
        <div className={styles.links}>
          <NavLink to="/my-movies" className={styles.link}>
            <span className={styles.collectionSpan}>Collection</span>
          </NavLink>
          <NavLink to="/sign-up" className={styles.link}>
            <button className={styles.signUpButton}>Sign up</button>
          </NavLink>
        </div>

        <button
          className={`${styles.dropdownBtn} ${styles.signUpButton}`}
          onClick={handleShowMenuBtn}
        >
          Menu
        </button>
        {showMenu && (
          <div className={styles.dropdownMenu}>
            <NavLink to="/my-movies" className={styles.link}>
              <span className={styles.span}>Collection</span>
            </NavLink>
            <NavLink to="/sign-up" className={styles.link}>
              <button className={styles.signUpButton}>Sign up</button>
            </NavLink>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;

import React from "react";
import MoviesLoader from "../../containers/MoviesLoader/MoviesLoader";
import styles from "./Home.module.scss";

const Home = () => {
  return (
    <div className={styles.homePage}>
      {/* <NewMoives/>   components coming , 2024 new movies */}

      <MoviesLoader />
    </div>
  );
};

export default Home;

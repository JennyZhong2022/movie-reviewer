import React from "react";
import { FavoriteMovieContext } from "../../context/FavoriteMovieContextProvider";
import MovieCard from "../../components/MovieCard/MovieCard";
import { useContext } from "react";
import styles from "./MyMoviesCollection.module.scss";

const MyMoviesCollection = () => {
  const { favoriteList } = useContext(FavoriteMovieContext);

  return (
    <div className={styles.movieCollectionContainer}>
      {favoriteList.length === 0 ? (
        <h1>No favorite movies yet.</h1>
      ) : (
        favoriteList.map((favorite) => (
          <MovieCard key={favorite.id} movie={favorite} />
        ))
      )}
    </div>
  );
};

export default MyMoviesCollection;

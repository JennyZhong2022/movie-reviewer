import React from "react";
import { FavoriteMovieContext } from "../../context/FavoriteMovieContextProvider";
import MovieCard from "../../components/MovieCard/MovieCard";
import { useContext } from "react";

const MyMoviesCollection = () => {
  const { favoriteList } = useContext(FavoriteMovieContext);

  return (
    <>
      {favoriteList.length === 0 ? (
        <h1>No favorite movies yet.</h1>
      ) : (
        favoriteList.map((favorite) => (
          <MovieCard key={favorite.id} movie={favorite} />
        ))
      )}
    </>
  );
};

export default MyMoviesCollection;

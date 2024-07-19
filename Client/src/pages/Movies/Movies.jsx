import React, { useState, useEffect, useContext } from "react";
import { getMoviesByFetch } from "../../services/movie-services";
import { SearchQueryContext } from "../../context/SearchQueryContextProvider";
import MovieCards from "../../components/MovieList/MovieCards";
import styles from "../../containers/MoviesLoader/MoviesLoader.module.scss";

const SearchedMovies = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [selectedYear, setSelectedYear] = useState("2024");
  const { searchTerm } = useContext(SearchQueryContext);

  const [movieData, setMovieData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await getMoviesByFetch(
          searchTerm,
          pageNumber,
          selectedYear
        );
        setMovieData((prev) =>
          pageNumber === 1 ? data.results : [...prev, ...data.results]
        );
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [pageNumber, selectedYear, searchTerm]);

  console.log("searchTerm:", searchTerm); // Check searchTerm in console

  return (
    <div style={{ padding: "0 2rem" }}>
      {loading && <p className={styles.loadingMessage}>Loading...</p>}
      {error && <p className={styles.errorMessage}>Error: {error}</p>}
      {movieData.length === 0 && !loading && (
        <p className={styles.noFoundMessage}>Opps,can't find the movie</p>
      )}

      <div className={styles.movieList}>
        {movieData.map((movie) => (
          <MovieCards key={movie.id} movie={movie}></MovieCards>
        ))}
      </div>
      {/* <button onClick={() => setPageNumber((prev) => prev + 1)}>
        Load More
      </button> */}
    </div>
  );
};

export default SearchedMovies;

{
  /* {movieData.map((movie) => (
          <p key={movie.id}>{movie.title}</p>
        ))} */
}

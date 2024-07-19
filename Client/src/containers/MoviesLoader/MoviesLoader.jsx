import React, { useState, useEffect } from "react";
import { getMoviesByFetch } from "../../services/movie-services";
import MovieCards from "../../components/MovieList/MovieCards";
import styles from "./MoviesLoader.module.scss";

const MoviesLoader = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [selectedYear, setSelectedYear] = useState("2024");
  const [searchValue] = useState("");
  const [movieData, setMovieData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await getMoviesByFetch(
          searchValue,
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
  }, [pageNumber, selectedYear, searchValue]);

  return (
    <div>
      {loading && <p className={styles.loadingMessage}>Loading...</p>}
      {error && <p className={styles.errorMessage}>Error: {error}</p>}
      <div className={styles.h2}>
        <h2>New Released Movies</h2>
      </div>

      <div className={styles.movieList}>
        {movieData.map((movie) => (
          <MovieCards key={movie.id} movie={movie}></MovieCards>
        ))}
      </div>
      <div className={styles.loadMoreBtn}>
        <button onClick={() => setPageNumber((prev) => prev + 1)}>
          Load More
        </button>
      </div>
    </div>
  );
};

export default MoviesLoader;

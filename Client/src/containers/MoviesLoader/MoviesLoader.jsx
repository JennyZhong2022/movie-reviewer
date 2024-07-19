import React, { useState, useEffect, useContext } from "react";
import { getMoviesByFetch } from "../../services/movie-services";
import { SearchQueryContext } from "../../context/SearchQueryContextProvider";
import MovieCards from "../../components/MovieList/MovieCards";
import styles from "./MoviesLoader.module.scss";

const MoviesLoader = () => {
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
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <div className={styles.h2}>
        {!searchTerm && <h2>New Released Movies</h2>}
      </div>

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

export default MoviesLoader;

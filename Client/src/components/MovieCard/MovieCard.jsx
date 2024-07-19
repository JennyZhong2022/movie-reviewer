import styles from "./MovieCard.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeartCirclePlus } from "@fortawesome/free-solid-svg-icons";

const languageMap = {
  en: "English",
  zh: "Chinese",
  es: "Spanish",
  fr: "French",
  de: "German",
  ja: "Japanese",
  ko: "Korean",
};

const MovieCard = ({ movie }) => {
  const getLanguageName = (code) => {
    return languageMap[code] || "Unknown";
  };

  // console.log(movie);
  return (
    <div className={styles.MovieCard}>
      <div className={styles.MovieCardLeftSide}>
        <img
          src={`https://image.tmdb.org/t/p/w780${movie.poster_path}`}
          alt="{movie.title} poster"
        />
      </div>
      <div className={styles.MovieCardRightSide}>
        <h4>
          {movie.title}{" "}
          <span className={styles.year}>
            ({movie.release_date.split("-")[0]})
          </span>
        </h4>
        <div className={styles.rating}>
          <span className={styles.star}>⭐</span>
          {movie.vote_average}
        </div>
        <div className={styles.basicInformation}>
          <p>
            {movie.release_date.split("-")[0]} /{" "}
            {getLanguageName(movie.original_language)}
          </p>
        </div>
        <div className={styles.actionButtons}>
          <button className={styles.btn}>
            <FontAwesomeIcon icon={faHeartCirclePlus} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;

{
  /* <img
        src={`https://image.tmdb.org/t/p/w780${movie.backdrop_path}`}
        alt="{movie.title} poster"
      /> */
}
{
  /* <article>{movie.overview}</article> */
}

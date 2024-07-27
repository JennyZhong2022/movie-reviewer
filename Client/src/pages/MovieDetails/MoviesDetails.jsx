import { useState } from "react";
import styles from "./MovieDetails.module.scss";
import { useAuth } from "../../context/AuthContextProvider";
import { useNavigate } from "react-router-dom";

const MovieDetails = ({ movie, directors, actors }) => {
  const [open, setOpen] = useState("false");
  const { isAuthenticated } =useAuth()
  const navigate=useNavigate()

  const handleTextareaToggle = () => {
    if (!isAuthenticated) {
      navigate("/sign-in")
    }
    setOpen(!open);
  };

  return (
    <div className={styles.container}>
      <h1>{movie.title}</h1>

      <div className={styles.movieDetailsSection}>
        <div className={styles.leftSide}>
          <img
            src={`https://image.tmdb.org/t/p/w780${movie.backdrop_path}`}
            alt={`${movie.title} backdrop poster`}
          />
        </div>

        <div className={styles.rightSide}>
          <h1>Over View</h1>
          <p>{movie.overview}</p>

          <h2>Director</h2>
          {directors.map((director) => (
            <p key={director.id}>{director.name}</p>
          ))}

          <h2>Lead Actors</h2>

          {actors.map((actor) => (
            <span key={actor.id}>{actor.name}</span>
          ))}
        </div>
      </div>

      <div className={styles.movieReviewSection}>
        <button onClick={handleTextareaToggle}>I want write a review</button>
        {!open && (
          <>
            <textarea name="" id=""></textarea> <button>Submit</button>
          </>
        )}
      </div>
    </div>
  );
};

export default MovieDetails;

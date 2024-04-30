import { useEffect, useState, useRef } from "react";
import {
  Link,
  useParams,
  useLocation,
  Outlet,
  useHistory,
} from "react-router-dom";
import { fetchMovieDetails } from "../../services/apiMovieDetails.js";

import css from "./MovieDetailsPage.module.css";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const location = useLocation();
  const history = useHistory();
  const prevLocation = useRef(location.state?.from ?? "/");

  useEffect(() => {
    async function fetchMovie() {
      try {
        const response = await fetchMovieDetails(movieId);
        setMovieDetails(response);
      } catch (error) {
        console.log(error);
      }
    }
    fetchMovie();
  }, [movieId]);

  const handleGoBack = () => {
    history.goBack(); // "Функція handleGoBack не повинна повертати компонент <Navigate>; натомість, вона повинна використовувати метод історії, як-от history.goBack() або navigate(-1), щоб повернутися до попереднього розташування"
  };  //am I doing it right?  

  return (
    movieDetails && (
      <div>
        <div className={css.wrap}>
          <img
            src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`}
            alt={movieDetails.title}
            width={300}
          />
          <button onClick={handleGoBack} className={css.btnBack}>
            ◀ Go back
          </button>
        </div>
        <h1>Title {movieDetails.title}</h1>
        <h2>Overview: </h2>
        <p>{movieDetails.overview}</p>
        <h2>Genres</h2>
        <p>{movieDetails.genres.map((genre) => genre.name).join(", ")}</p>
        <div>
          <h2>Additional information</h2>
          <ul>
            <li>
              <Link to={`${location.pathname}/cast`}>Cast</Link>
            </li>
            <li>
              <Link to={`${location.pathname}/reviews`}>Reviews</Link>
            </li>
          </ul>
        </div>
        <Outlet />
      </div>
    )
  );
};

export default MovieDetailsPage;

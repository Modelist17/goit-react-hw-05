import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieCast } from "../../services/apiMovieCast";

import css from "./MovieCast.module.css";

const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState();

  useEffect(() => {
    async function fetchMovies() {
      try {
        const response = await fetchMovieCast(movieId);
        setCast(response.cast);
      } catch (error) {
        console.log(error);
      }
    }
    fetchMovies();
  }, [movieId]);

  return (
    <div>
      <ul className={css.castList}>
        {cast &&
          cast.map((el) => (
            <li key={el.cast_id}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${el.profile_path}`}
                alt=""
                width={240}
              />
              <p>Character: {el.character}</p>
              <p>Name: {el.name}</p>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default MovieCast;

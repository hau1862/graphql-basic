import movieListStyle from "../styles/MovieList.module.css";
import { useQuery } from "@apollo/client";
import { useState, useEffect } from "react";
import { getAllMovies } from "../graphql-client/queries";

export default function MovieList(props) {
  const moviesKey = "movies";
  const { setLoadingSpinner, setMovieId } = props;
  const [movieList, setMovieList] = useState([]);
  const { loading, error, data } = useQuery(getAllMovies);

  useEffect(() => {
    setLoadingSpinner(loading);

    if (error) {
      alert(error.message);
    } else if (data && data.hasOwnProperty(moviesKey)) {
      setMovieList(data.movies);
    }
  });

  return <div className={movieListStyle.movieList}>
    {
      movieList.map((movie) => {
        return <div className={movieListStyle.movieItem} key={movie.id} onClick={(event) => {
          setMovieId(movie.id);
        }}>
          <div className={movieListStyle.movieName}>{movie.name}</div>
        </div>;
      })
    }
  </div>;
}

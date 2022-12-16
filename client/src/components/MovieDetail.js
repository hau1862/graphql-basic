import movieStyle from "../styles/MovieDetail.module.css";
import { useQuery } from "@apollo/client";
import { getMovieById } from "../graphql-client/queries";
import { useEffect, useState } from "react";

export default function MovieDetail(props) {
  const movieKey = "movie";
  const { setLoadingSpinner, movieId } = props;
  const [movie, setMovie] = useState({});
  const { loading, error, data } = useQuery(getMovieById, {
    variables: {
      id: movieId
    }
  });

  useEffect(() => {
    setLoadingSpinner(loading);

    if (error) {
      alert(error.message);
    } else if (data && data.hasOwnProperty(movieKey)) {
      setMovie(data.movie);
    }
  });

  if (!error && movie && JSON.stringify(movie) !== JSON.stringify({})) {
    return <div className={movieStyle.movieDetail} key={movie.id}>
      <div className={movieStyle.movieName}>{movie.name}</div>
      <div className={movieStyle.movieGenre}>{movie.genre}</div>
      <div className={movieStyle.movieAuthorName}>{movie.author.name}</div>
    </div>;
  } else {
    return <div className={movieStyle.movieDetail}>No Data</div>;
  }
}

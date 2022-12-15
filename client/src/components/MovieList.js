import movieListStyle from "../styles/MovieList.module.css";

export default function MovieList(props) {
  return <div className={movieListStyle.movieList}>
    {
      props.movieList.map((movie) => {
        return <div className={movieListStyle.movieItem}>{movie.name}</div>;
      })
    }
  </div>;
}

import "./App.css";
import MovieList from "./components/MovieList";
import { useState, useEffect } from "react";
import Spinner from "./components/Spinner";

function App() {
  const [movieList, setMovieList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

  });

  return (
    <div className="App">
      <div className="spinner-container" style={loading ? { display: "flex" } : { display: "none" }}>
        <Spinner />
      </div>
      <MovieList movieList={movieList} />
    </div>
  );
}

export default App;

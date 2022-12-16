import "./App.css";
import MovieList from "./components/MovieList";
import MovieDetail from "./components/MovieDetail";
import Spinner from "./components/Spinner";
import { useState } from "react";


function App() {
  const [loadingSpinner, setLoadingSpinner] = useState(false);
  const [movieId, setMovieId] = useState(0);

  return (
    <div className="App">
      <button type="button" onClick={() => {
        setMovieId(0);
      }}>Reset</button>
      <Spinner isLoading={loadingSpinner} />
      <MovieList setMovieId={setMovieId} setLoadingSpinner={setLoadingSpinner} />
      <MovieDetail movieId={movieId} setLoadingSpinner={setLoadingSpinner} />
    </div>
  );
}

export default App;

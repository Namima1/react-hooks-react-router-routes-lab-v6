import MovieCard from "../components/MovieCard"; 
import { useEffect, useState } from "react"; 

function Home() {
  const [movies, setMovies] = useState([]); 

  useEffect(() => {
    fetch("http://localhost:3000/movies") 
      .then((response) => response.json()) 
      .then((data) => setMovies(data)); 
  }, []);

  return (
    <div>
      <h1>Home Page</h1>
      {movies.map((movie) => (
        <MovieCard key={movie.id} title={movie.title} id={movie.id} />
      ))}
    </div>
  );
}

export default Home; // Export Home for use in routes

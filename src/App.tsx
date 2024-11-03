import axios from "axios";
import { useEffect, useState } from "react";

interface MoviesProps {
  title: string;
  poster_path: string;
  release_date: string;
}

export function App() {
  const [movies, setMovies] = useState<MoviesProps[]>([]);

  function getMovies() {
    axios({
      method: "get",
      url: "https://api.themoviedb.org/3/discover/movie",
      params: {
        api_key: "0a402cff78047e395e95defbf2f582ba",
      },
    }).then((response) => {
      console.log(response.data.results);
      setMovies(response.data.results);
    });
  }

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <>
      <header className="text-center mt-4">
        <form>
          <input
            className="mr-2 text-black"
            type="text"
            placeholder="Type the movie name..."
          />
          <button type="submit">Search</button>
        </form>
      </header>

      <main className="m-4 flex-wrap h-screen flex justify-center items-center gap-8">
        {movies.map((movie, index) => (
          <div className="w-56 h-80" key={index}>
            <h2 className="text-center">{movie.title}</h2>
            <img
              className="object-cover w-full h-64"
              src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
            />
            <span className="flex justify-center">{movie.release_date}</span>
          </div>
        ))}
      </main>
    </>
  );
}

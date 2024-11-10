import axios from "axios";
import { useEffect, useState } from "react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import Logo from "./logo.svg"

interface MoviesProps {
  title: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
}

export function App() {
  const [movies, setMovies] = useState<MoviesProps[]>([]);

  function getMovies() {
    axios({
      method: "get",
      url: "https://api.themoviedb.org/3/discover/movie",
      params: {
        api_key: "0a402cff78047e395e95defbf2f582ba",
        language: "pt-BR",
      },
    }).then((response) => {
      setMovies(response.data.results);
    });
  }

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <>
      <header>
        <nav className="bg-sky-950 py-5">
          <div className="max-w-7xl flex items-center justify-between my-0 mx-auto">
            <img src={Logo} className="w-37 h-5" />

            <div>
              <input
                className="mr-2 text-black rounded-md outline-none"
                type="text"
                placeholder="Search Movie"
              />
              <button className="text-white border rounded-md" type="submit">Search</button>
            </div>
          </div>
        </nav>
      </header>

      <ul className="max-w-7xl my-4 mx-auto flex justify-between flex-wrap">
        {movies.map((movie, index) => (
          <li className="w-56 h-85" key={index}>
            <img
              className="object-cover w-full h-64"
              src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
            />
            <span>{movie.vote_average}%</span>
            <h2 className="font-bold">{movie.title}</h2>
            <span>
              {format(movie.release_date, "dd 'de' MMMM 'de' yyyy", {
                locale: ptBR,
              })}
            </span>
          </li>
        ))}
      </ul>
    </>
  );
}

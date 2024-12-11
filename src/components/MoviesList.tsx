import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { MovieResponse } from "../App";

interface MoviesListProps {
  moviesResponse: MovieResponse;
}

export function MoviesList({ moviesResponse }: MoviesListProps) {
  return (
    <ul className="max-w-7xl my-4 mx-auto flex justify-evenly flex-wrap">
      {moviesResponse?.results.map((movie, index) => (
        <li className="w-56 h-85" key={index}>
          <img
            className="object-cover w-full h-64"
            src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
          />
          <span>{movie.vote_average}%</span>
          <h2 className="font-bold">{movie.title}</h2>
          <span>
            {format(movie.release_date, "dd 'de' MMM 'de' yyyy", {
              locale: ptBR,
            })}
          </span>
        </li>
      ))}
    </ul>
  );
}

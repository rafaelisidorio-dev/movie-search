import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { MoviesProps } from "../App";

interface MoviesListProps {
  movies: MoviesProps;
}

export function MoviesList({ movies }: MoviesListProps) {
  return (
    <ul className="max-w-7xl my-4 mx-auto flex justify-evenly flex-wrap">
      {movies?.results.map((movie, index) => (
        <li className="w-56 h-85" key={index}>
          <img
            className="object-cover w-full h-64"
            src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
          />
          <span>{movie.vote_average}%</span>
          <h2 className="font-bold">{movie.title}</h2>
          <span>
            {movie.release_date.length > 0 ? format(movie.release_date, "dd 'de' MMM 'de' yyyy", { locale: ptBR }) : "2024-02-28"}
          </span>
        </li>
      ))}
    </ul>
  );
}

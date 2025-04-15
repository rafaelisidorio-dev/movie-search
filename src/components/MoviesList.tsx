import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { MoviesProps } from "../App";

interface MoviesListProps {
  movies: MoviesProps;
}

export function MoviesList({ movies }: MoviesListProps) {
  return (
    <ul className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {movies?.results.map((movie, index) => (
        <li
          className="text-black leading-5 border border-gray-300 rounded-md shadow-md overflow-hidden"
          key={index}
        >
          <img
            className="object-cover"
            src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
          />
          <div className="p-3">
            <span>{movie.vote_average}%</span>
            <h2 className="font-bold">{movie.title}</h2>
            <span className="text-[rgba(0,0,0,.6)]">
              {movie.release_date.length > 0
                ? format(movie.release_date, "dd 'de' MMM 'de' yyyy", {
                    locale: ptBR,
                  })
                : "2024-02-28"}
            </span>
          </div>
        </li>
      ))}
    </ul>
  );
}

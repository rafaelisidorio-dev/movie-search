import { NavBar } from "./components/NavBar";
import { MoviesList } from "./components/MoviesList";
import { ChangeEvent, useEffect, useState } from "react";
import { Pagination } from "./components/Pagination";
import { useSearchParams } from "react-router-dom";
import axios from "axios";

export interface MoviesProps {
  page: number;
  results: MovieProps[];
  total_pages: number;
}

interface MovieProps {
  title: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
}

export function App() {
  const [movies, setMovies] = useState<MoviesProps>();
  const [movieSearch, setMovieSearch] = useState("");

  const [searchParams] = useSearchParams();
  const page = searchParams.get("page") ? Number(searchParams.get("page")) : 1;

  useEffect(() => {
    axios
      .get("https://api.themoviedb.org/3/discover/movie", {
        params: {
          api_key: "0a402cff78047e395e95defbf2f582ba",
          page: page,
        },
      })
      .then((response) => {
        setMovies(response.data);
        console.log(response.data);
      });
  }, [page]);

  function handleSubmit(event: ChangeEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!movieSearch) {
      return;
    }

    axios
      .get("https://api.themoviedb.org/3/search/movie", {
        params: {
          api_key: "0a402cff78047e395e95defbf2f582ba",
          query: movieSearch,
          page: page,
        },
      })
      .then((response) => {
        setMovies(response.data);
        console.log(response.data);
      });

    setMovieSearch("");
  }

  return (
    <>
      <NavBar
        movieSearch={movieSearch}
        setMovieSearch={setMovieSearch}
        handleSubmit={handleSubmit}
      />

      {movies ? (
        <MoviesList movies={movies!} />
      ) : (
        <h1 className="text-center text-xl m-4 font-bold">Loading...</h1>
      )}

      {movies && <Pagination page={page} pages={movies?.total_pages!} />}
    </>
  );
}

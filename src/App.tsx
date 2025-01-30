import { NavBar } from "./components/NavBar";
import { MoviesList } from "./components/MoviesList";
import { useEffect, useState } from "react";
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
  const [searchTerm, setSearchTerm] = useState("");

  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get("page") ? Number(searchParams.get("page")) : 1;

  // TODO: Bug fix, this function isn't working
  // Reset page to 1 when changing search
  function onChangeSearch() {
    setSearchParams((params) => {
      params.set("page", String(1));

      return params;
    });
  }

  // Run effect to load movies when the page or the searchTerm changes
  useEffect(() => {
    const endpoint =
      searchTerm === ""
        ? "https://api.themoviedb.org/3/discover/movie"
        : "https://api.themoviedb.org/3/search/movie";

    axios
      .get(endpoint, {
        params: {
          api_key: "0a402cff78047e395e95defbf2f582ba",
          query: searchTerm,
          page: page,
        },
      })
      .then((response) => {
        setMovies(response.data);
        console.log(response.data);
      })
      .catch((error) => console.error(error));
  }, [searchTerm, page]);

  return (
    <>
      <NavBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      {movies ? (
        <MoviesList movies={movies!} />
      ) : (
        <h1 className="text-center text-xl m-4 font-bold">Loading...</h1>
      )}

      {movies && (
        <Pagination
          page={page}
          pages={movies?.total_pages!}
          setSearchParams={setSearchParams}
        />
      )}
    </>
  );
}

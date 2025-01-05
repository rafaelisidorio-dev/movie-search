import { NavBar } from "./components/NavBar";
//import { keepPreviousData, useQuery } from "@tanstack/react-query";
//import { useSearchParams } from "react-router-dom";
import { MoviesList } from "./components/MoviesList";
import { ChangeEvent, useState } from "react";

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
  {/*const [searchParams] = useSearchParams();

  const page = searchParams.get("page") ? Number(searchParams.get("page")) : 1

  const { data: moviesResponse, isLoading } = useQuery<MovieResponse>({
    queryKey: ["get-movies", page],
    queryFn: async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=0a402cff78047e395e95defbf2f582ba&page=${page}`
        //`https://api.themoviedb.org/3/search/movie?api_key=0a402cff78047e395e95defbf2f582ba&query=1888&page=${page}`
      );
      const data = response.json();

      console.log(moviesResponse);

      return data;
    },
    placeholderData: keepPreviousData,
  });

  if (isLoading) {
    return null;
  };*/}

  const [movies, setMovies] = useState<MoviesProps>()
  const [movieSearch, setMovieSearch] = useState("")

  function handleSubmit(event: ChangeEvent<HTMLFormElement>) {
    event.preventDefault()

    if (!movieSearch) {
      return
    }

    fetch(`https://api.themoviedb.org/3/search/movie?api_key=0a402cff78047e395e95defbf2f582ba&query=${movieSearch}`)
      .then(response => response.json())
      .then(data => {
        setMovies(data)
        console.log(data)
      })

    setMovieSearch("")
  }

  return (
    <>
      <NavBar
        movieSearch={movieSearch}
        setMovieSearch={setMovieSearch}
        handleSubmit={handleSubmit}
      />
      <MoviesList
        movies={movies!}
      />
    </>
  );
}

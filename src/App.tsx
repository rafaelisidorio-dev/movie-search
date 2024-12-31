import { NavBar } from "./components/NavBar";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { MoviesList } from "./components/MoviesList";
import { ChangeEvent, useState } from "react";

export interface MovieResponse {
  page: number;
  results: Movie[];
  total_pages: number;
}

interface Movie {
  title: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
}

export function App() {
  const [searchParams] = useSearchParams();
  const [formData, setFormData] = useState('')

  const page = searchParams.get("page") ? Number(searchParams.get("page")) : 1

  const { data: moviesResponse, isLoading } = useQuery<MovieResponse>({
    queryKey: ["get-movies", page],
    queryFn: async () => {
      const response = await fetch(
        //`https://api.themoviedb.org/3/discover/movie?api_key=0a402cff78047e395e95defbf2f582ba&page=${page}`
        `https://api.themoviedb.org/3/search/movie?api_key=0a402cff78047e395e95defbf2f582ba&query=jack+the+ripper&page=${page}`
      );
      const data = response.json();

      console.log(moviesResponse);

      return data;
    },
    placeholderData: keepPreviousData,
  });

  if (isLoading) {
    return null;
  };


  function handleSubmit(event: ChangeEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!formData) return;

    console.log(formData)
    setFormData('')
  }

  return (
    <>
      <NavBar formData={formData} setFormData={setFormData} handleSubmit={handleSubmit} />
      <MoviesList moviesResponse={moviesResponse!} />
    </>
  );
}

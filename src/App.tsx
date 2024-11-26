import axios from "axios";
import { useEffect, useState } from "react";
import { Movies } from "./components/Movies";
import { Pagination } from "./components/Pagination";
import { NavBar } from "./components/NavBar";

export interface MovieProps {
  title: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
}

export function App() {
  const [movies, setMovies] = useState<MovieProps[]>([]);
  const [loading, setLoading] = useState(false);
  const moviesPerPage = 20;

  // working on pagination here
  const [totalResults, setTotalResults] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  function getMovies() {
    setLoading(true);

    axios({
      method: "get",
      url: "https://api.themoviedb.org/3/search/movie",
      params: {
        api_key: "0a402cff78047e395e95defbf2f582ba",
        language: "pt-BR",
        query: "batman",
      },
    }).then((response) => {
      setMovies(response.data.results);
      setTotalResults(response.data.total_results);
      console.log(response.data.results);
      setLoading(false);
    });
  }

  useEffect(() => {
    getMovies()
  }, [])

  // Get current movies
  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = movies.slice(indexOfFirstMovie, indexOfLastMovie);

  // working on pagination here
  function nextPage(pageNumber: number) {
    setLoading(true);

    axios({
      method: "get",
      url: "https://api.themoviedb.org/3/search/movie",
      params: {
        api_key: "0a402cff78047e395e95defbf2f582ba",
        language: "pt-BR",
        query: "batman",
        page: pageNumber,
      },
    }).then((response) => {
      setMovies(response.data.results);
      setCurrentPage(pageNumber);
      console.log(response.data.results);
      setLoading(false);
    });
  }

  // working on pagination here
  const numberPages = Math.floor(totalResults / moviesPerPage);

  return (
    <>
      <NavBar />
      <Movies movies={currentMovies} loading={loading} />
      {totalResults > 20 ? (
        <Pagination
          currentPage={currentPage}
          pages={numberPages}
          nextPage={nextPage}
        />
      ) : (
        ""
      )}
    </>
  );
}

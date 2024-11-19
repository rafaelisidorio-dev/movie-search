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
  const [currentPage, setCurrentPage] = useState(1);
  const [moviesPerPage] = useState(20);

  function getMovies() {
    setLoading(true);

    axios({
      method: "get",
      url: "https://api.themoviedb.org/3/discover/movie",
      params: {
        api_key: "0a402cff78047e395e95defbf2f582ba",
        language: "pt-BR",
      },
    }).then((response) => {
      setMovies(response.data.results);
      console.log(response.data);
      setLoading(false);
    });
  }

  useEffect(() => {
    getMovies();
  }, []);

  // Get current movies
  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = movies.slice(indexOfFirstMovie, indexOfLastMovie);

  // Change page
  function paginate(pageNumber: number) {
    setCurrentPage(pageNumber);
  }

  return (
    <>
      <NavBar />
      <Movies movies={currentMovies} loading={loading} />
      <Pagination
        moviesPerPage={moviesPerPage}
        totalMovies={movies.length}
        paginate={paginate}
      />
    </>
  );
}

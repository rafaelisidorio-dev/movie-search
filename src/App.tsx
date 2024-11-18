import axios from "axios";
import { useEffect, useState } from "react";
import Logo from "./logo.svg";
import { Movies } from "./components/Movies";
import { Pagination } from "./components/Pagination";

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
  const [moviesPerPage] = useState(5);

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
              <button className="text-white border rounded-md" type="submit">
                Search
              </button>
            </div>
          </div>
        </nav>
      </header>

      <Movies movies={currentMovies} loading={loading} />
      <Pagination
        moviesPerPage={moviesPerPage}
        totalMovies={movies.length}
        paginate={paginate}
      />
    </>
  );
}

import { useEffect, useState } from "react"

interface MoviesProps {
  Title: string
  Poster: string
  Year: string
}

export function App() {
  const [movies, setMovies] = useState<MoviesProps[]>([])

  useEffect(() => {
    fetch("https://www.omdbapi.com/?apikey=4ca5ce0b&s=batman")
      .then(response => response.json())
      .then(data => {
        console.log(data.Search)
        setMovies(data.Search)
      })
      .catch(err => console.log(err.message))
  }, [])

  return (
    <>
      <header>
        <form action="">
          <input type="text" placeholder="Type the movie name..." />
          <button type="submit">Search</button>
        </form>
      </header>

      <main className="m-4 flex-wrap h-screen flex justify-center items-center gap-8">
        {movies.map((movie, index) => (
          <div className="w-56 h-80" key={index}>
            <h2 className="text-center">{movie.Title}</h2>
            <img className="object-cover w-full h-64" src={movie.Poster} />
            <span className="flex justify-center">{movie.Year}</span>
          </div>
        ))}
      </main>
    </>
  )
}

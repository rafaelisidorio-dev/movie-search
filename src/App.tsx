import { ChangeEvent, useEffect, useState } from "react"

interface MoviesProps {
  Title: string
  Poster: string
  Year: string
}

export function App() {
  const [movies, setMovies] = useState<MoviesProps[]>([])
  const [inputText, setInputText] = useState('')

  // const movieName = ""

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?apikey=4ca5ce0b&s=${inputText}`)
      .then(response => response.json())
      .then(data => {
        // console.log(data.Search)
        setMovies(data.Search)
      })
      .catch(err => console.log(err.message))
  }, [])

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    event.preventDefault()
    setInputText(event.target.value)
  }

  return (
    <>
      <header className="text-center mt-4">
        <form>
          <input className="mr-2 text-black" type="text" value={inputText} onChange={handleInputChange} placeholder="Type the movie name..." />
          <button type="submit">Search</button>
        </form>
      </header>

      {inputText.length > 0 ?
        <main className="m-4 flex-wrap h-screen flex justify-center items-center gap-8">
          {movies.map((movie, index) => (
            <div className="w-56 h-80" key={index}>
              <h2 className="text-center">{movie.Title}</h2>
              <img className="object-cover w-full h-64" src={movie.Poster} />
              <span className="flex justify-center">{movie.Year}</span>
            </div>
          ))}
        </main> : <h1 className="text-center mt-4">{inputText}</h1>
      }
    </>
  )
}

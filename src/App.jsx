import { useState } from "react";
import axios from "axios";

const api_url = `https://api.themoviedb.org`



function App() {

  const API_KEY = import.meta.env.VITE_THE_MOVIE_DB_API_KEY
  //console.log(API_KEY);

  const flags = {
    it: "/public/Flag_of_Italy.svg.png",
    en: "/public/Flag_of_the_United_Kingdom.svg.png",
    fr: "/public/Flag_of_France.svg.webp",
    es: "/public/Flag_of_Spain.svg.png",
  }

  const [searchBar, setSearcBar] = useState('')
  const [movies, setMovies] = useState([])

  function handleSearch(e) {
    //console.log(e)
    setSearcBar(e.target.value)
  }

  function handleButton() {
    //console.log('stai cercando');
    axios(`${api_url}/3/search/movie?api_key=${API_KEY}&query=${searchBar}`)
      .then(res => {
        //console.log(res.data);
        setMovies(res.data.results)
        //console.log(res.data.results);
      })
  }

  return (
    <>
      <h1>Boolflix</h1>
      <input type="text" value={ searchBar } placeholder="type a movie" onChange={ handleSearch } />
      <button onClick={ handleButton }>search</button>

      <ul>
        { movies.map(movie =>
          <li key={ movie.id }>
            Titolo:{ movie.title }
            <div>Titolo originale:{ movie.original_title }</div>
            Lingua:{ flags[movie.original_language] ? (<img className="flagImage" src={ flags[movie.original_language] } alt="language" />) : (<span> { movie.original_language }</span>) }
            <div>Voto:{ movie.vote_average }</div>
          </li>) }
      </ul>
    </>
  )
}

export default App

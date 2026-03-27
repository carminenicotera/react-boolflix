import { useState } from "react";
import axios from "axios";

const api_url = `https://api.themoviedb.org`
const image_url = 'https://image.tmdb.org/t/p/'
const image_size = 'w342'

const flags = {
  it: "/Flag_of_Italy.svg.png",
  en: "/Flag_of_the_United_Kingdom.svg.png",
  fr: "/Flag_of_France.svg.webp",
  es: "/Flag_of_Spain.svg.png",
}

function App() {

  const API_KEY = import.meta.env.VITE_THE_MOVIE_DB_API_KEY
  //console.log(API_KEY);

  const [searchBar, setSearcBar] = useState('')
  const [results, setResults] = useState([])

  // Aggiorno stato dell'input
  function handleSearch(e) {
    //console.log(e)
    setSearcBar(e.target.value)
  }

  // Al clic eseguo due chiamate per film e serie
  function handleSubmit(e) {
    e.preventDefault()

    axios.get(`${api_url}/3/search/movie?api_key=${API_KEY}&query=${searchBar}`)
      .then(resMovie => {
        const movieFound = resMovie.data.results

        axios.get(`${api_url}/3/search/tv?api_key=${API_KEY}&query=${searchBar}`)
          .then(resTv => {
            const tvFound = resTv.data.results

            // Utilizzo lo spread operator per estrarre gli elementi dai due array ricevuti dalle API e inserirli in un nuovo array
            setResults([...movieFound, ...tvFound])
          })
      })
  }


  function addStars(vote) {
    // calcolo quante stelle vanno inserite
    const rating = Math.ceil(vote / 2)
    const stars = []

    // pusho le stelle in un array
    for(let i = 0; i < rating; i++){
      stars.push(<span>★</span>)
    }
    return stars
  }

  return (
    <>
      <h1>Boolflix</h1>
      <form onSubmit={ handleSubmit }>
        <input type="text" value={ searchBar } placeholder="type a movie or a series" onChange={ handleSearch } />
        <button type="submit">search</button>
      </form>

      <ul>
        { results.map(result =>
          <li key={ result.id }>
            <img src={ `${image_url}${image_size}${result.poster_path}` } alt="movie poster" />
            {/* uso .title e .original:title per i film e .name e .original_name per le serie tv */ }
            <div>Titolo:{ result.title || result.name }</div>
            <div>Titolo originale:{ result.original_title || result.original_name }</div>
            {/* Se la lingua è presente nell'oggetto flags mostra la bandiera altrimenti mostra solo le iniziali della lingua */ }
            Lingua:{ flags[result.original_language] ? (<img className="flagImage" src={ flags[result.original_language] } alt="language" />) : (<span> { result.original_language }</span>) }
            <div>Voto:{ addStars(result.vote_average) }</div>
          </li>) }
      </ul>
    </>
  )
}

export default App

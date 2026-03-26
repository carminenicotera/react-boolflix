import { useState } from "react";
import axios from "axios";

const api_url = `https://api.themoviedb.org`

function App() {

  const API_KEY = import.meta.env.VITE_THE_MOVIE_DB_API_KEY
  //console.log(API_KEY);


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
        console.log(res.data);
        setMovies(res.data.results)
        console.log(res.data.results);
      })
  }

  return (
    <>
      <h1>Boolflix</h1>
      <input type="text" value={ searchBar } placeholder="type a movie" onChange={ handleSearch } />
      <button onClick={ handleButton }>search</button>

      <ul>
        { movies.map(movie => <li key={ movie.id }>{ movie.title }</li>) }
      </ul>
    </>
  )
}

export default App

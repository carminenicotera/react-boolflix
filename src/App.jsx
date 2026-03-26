import { useState } from "react";

function App() {

  const API_KEY = import.meta.env.VITE_THE_MOVIE_DB_API_KEY
  //console.log(API_KEY);

  const api_url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=matrix`
  //console.log(api_url);

  const [searchBar, setSearcBar] = useState('')

  function handleSearch(e) {
    //console.log(e)
    setSearcBar(e.target.value)
  }

  function handleButton() {
    console.log('stai cercando');
  }

  return (
    <>
      <h1>Boolflix</h1>
      <input type="text" value={ searchBar } placeholder="type a movie" onChange={ handleSearch } />
      <button onClick={ handleButton }>search</button>
    </>
  )
}

export default App

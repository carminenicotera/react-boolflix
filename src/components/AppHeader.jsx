export default function AppHeader({ searchBar, onSearchChange, onSubmit }) {

  return (
    <header>
      <h1>Boolflix</h1>
      <form onSubmit={ onSubmit }>
        <input
          type="text"
          value={ searchBar }
          placeholder="Cerca film o serie..."
          onChange={ onSearchChange }
        />
        <button type="submit">Cerca</button>
      </form>
    </header>
  )
}
export default function AppHeader({ searchBar, onSearchChange, onSubmit }) {

  return (
    <header className="boolflix-header bg-black py-3 px-4 d-flex align-items-center justify-content-between sticky-top">
      <h1 className="logo m-0">BOOLFLIX</h1>
      <form onSubmit={ onSubmit } className="d-flex align-items-center">
        <input
          className="form-control me-2 bg-dark text-white border-secondary shadow-none search-input"
          type="text"
          value={ searchBar }
          placeholder="Cerca film o serie..."
          onChange={ onSearchChange }
        />
      </form>
    </header>
  )
}
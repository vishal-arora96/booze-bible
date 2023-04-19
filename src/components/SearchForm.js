import React, { useContext, useEffect, useRef } from "react";
import { AppContext } from "../context";

function SearchForm() {
  const { setSearchTerm } = useContext(AppContext);

  const searchBar = useRef("");

  useEffect(() => {
    searchBar.current.focus();
  }, []);

  function searchCocktail(e) {
    setSearchTerm(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <section className="section search">
      <form onSubmit={handleSubmit} className="search-form">
        <div className="form-control">
          <input
            type="text"
            name="name"
            placeholder="Search for a drink...."
            ref={searchBar}
            onChange={searchCocktail}
          />
        </div>
      </form>
    </section>
  );
}

export default SearchForm;

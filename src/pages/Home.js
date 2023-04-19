import React from "react";
import SearchForm from "../components/SearchForm";
import CocktailList from "../components/CocktailList";

function Home() {
  return (
    <div>
      <SearchForm />
      <CocktailList/>
    </div>
  );
}

export default Home;

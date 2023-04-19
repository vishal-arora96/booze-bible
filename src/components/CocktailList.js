import React, { useContext } from "react";
import { AppContext } from "../context";
import Loader from "./Loader";
import Cocktail from "./Cocktail";

function CocktailList() {
  const { cocktails, loading } = useContext(AppContext);

  if (loading) {
    return <Loader />;
  }
  if (cocktails.length < 1) {
    return <h2 className="section-title">Oops! No matches found</h2>;
  }
  return (
    <section className="section">
      <h2 className="section-title">Cocktails List</h2>
      <div className="cocktails-center">
        {cocktails.map((cocktail) => (
          <Cocktail key={cocktail.id} {...cocktail} />
        ))}
      </div>
    </section>
  );
}

export default CocktailList;

import React from "react";
import { Link } from "react-router-dom";

function Cocktail({ image, name, id, info, glass }) {
  return (
    <article>
      <div className="cocktail">
        <img src={image} alt={name} />
      </div>
      <div className="img-container">
        <h3>{name}</h3>
        <h3>{glass}</h3>
        <p>{info}</p>
        <Link to={`cocktail/${id}`} className="btn btn-primary btn-details">
          more details...
        </Link>
      </div>
    </article>
  );
}

export default Cocktail;

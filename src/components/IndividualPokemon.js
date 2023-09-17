import React, { useState } from "react";
import "./styles/IndividualPokemon.css";
import KnowMoreComponent from "./KnowMoreComponent";

function IndividualPokemon({ pokemon }) {
  const { id, name, type, image } = pokemon;
  const [showKnowMoreComponent, setShowKnowMoreComponent] = useState(false);

  return (
    <>
      <div className={`individual-pokemon ${type}`}>
        <div className="number">
          <small>#{id}</small>
        </div>
        <img className="pokemon-image" src={image} alt={name} />
        <div className="pokemon-details-wrapper">
          <h3 className="pokemon-name">{name}</h3>
          <small>Type: {type}</small>
          <button
            className="know-more"
            onClick={() => setShowKnowMoreComponent(true)}
          >
            Know more...
          </button>
        </div>
      </div>
      {showKnowMoreComponent && (
        <KnowMoreComponent
          pokemon={pokemon}
          setShowKnowMoreComponent={setShowKnowMoreComponent}
        />
      )}
    </>
  );
}

export default IndividualPokemon;

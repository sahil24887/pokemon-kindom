import React, { useEffect, useState } from "react";
import axios from "axios";
import "./styles/PokemonContainer.css";
import IndividualPokemon from "./IndividualPokemon";

const URL = [
  "https://content.newtonschool.co/v1/pr/64ccef982071a9ad01d36ff6/pokemonspages1",
  "https://content.newtonschool.co/v1/pr/64ccef632071a9ad01d36fea/pokemonspages2",
  "https://content.newtonschool.co/v1/pr/64ccef112071a9ad01d36fdc/pokemonspages3",
  "https://content.newtonschool.co/v1/pr/64cceecf2071a9ad01d36fca/pokemonspages4",
];

function PokemonContainer() {
  const [pokemons, setPokemons] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const getPokemonsDetails = async () => {
    const res1 = await axios.get(URL[currentPage - 1]);

    res1.data[0].results.map(async (pokemon) => {
      const res2 = await axios.get(pokemon.url);
      setPokemons((currentData) => [...currentData, res2.data[0]]);
    });
  };

  // It will behave like componentDidMount
  useEffect(() => {
    // We are setting it to empty array, so that it doesn't take previous page values as well
    setPokemons([]);
    getPokemonsDetails();
  }, [currentPage]);

  return (
    <>
      <div className="pokemon-container">
        {pokemons.map((pokemon) => {
          return <IndividualPokemon key={pokemon.id} pokemon={pokemon} />;
        })}
      </div>
      {/* <button className="load-more-button" onClick={() => getPokemonsDetails()}>
        More Pokemons
      </button> */}
      <div className="pagination-section">
        <div className="page" onClick={() => setCurrentPage(1)}>
          1
        </div>
        <div className="page" onClick={() => setCurrentPage(2)}>
          2
        </div>
        <div className="page" onClick={() => setCurrentPage(3)}>
          3
        </div>
        <div className="page" onClick={() => setCurrentPage(4)}>
          4
        </div>
      </div>
    </>
  );
}

export default PokemonContainer;

import "./Pokemons.css";

import { useFetch } from "../components/PokeApi/PokeApi";
import { Button } from "../components/Button/Button";
import { useState } from "react";
import { Link } from "react-router-dom";

const Pokemons = () => {
  const url = "https://pokeapi.co/api/v2/pokemon";
  const [showPokemons, setShowPokemons] = useState(11);
  const { data: pokemons, loading } = useFetch(url, showPokemons);

  const handlePrevPokemons = () => {
    if (showPokemons <= 11) {
      return;
    } else {
      setShowPokemons(showPokemons - 10);
    }
  };

  const handleNextPokemons = () => {
    if (showPokemons >= 151) {
      return;
    } else {
      setShowPokemons(showPokemons + 10);
    }
  };

  return (
    <div>
      <h1>Pokemons</h1>
      {loading && <p>Aguarde um momento</p>}
      {!loading && (
        <ul className="pokemon-list">
          {pokemons &&
            pokemons.map((pokemon) => (
              <li key={pokemon.id}>
                <h2>
                  #{pokemon.id} - {pokemon.name}
                </h2>
                <img src={pokemon.sprites.other.home.front_default} alt="" />
                <Link to={`/pokemon/${pokemon.id}`}>Detalhes</Link>
              </li>
            ))}
        </ul>
      )}
      {!loading && (
        <div className="btns">
          {showPokemons === 11 ? (
            <Button disabled>Voltar</Button>
          ) : (
            <Button onClick={handlePrevPokemons}>Voltar</Button>
          )}
          {showPokemons === 151 ? (
            <Button disabled>Avançar</Button>
          ) : (
            <Button onClick={handleNextPokemons}>Avançar</Button>
          )}
        </div>
      )}
    </div>
  );
};

export default Pokemons;

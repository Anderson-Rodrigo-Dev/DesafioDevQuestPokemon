import "./Pokemons.css";

import { Button } from "../components/Button/Button";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useFetch } from "../components/PokeApi/PokeApi";

const Pokemons = () => {
  const [offset, setOffset] = useState(0);

  const { pokemons, loading } = useFetch(offset);

  const handleNextPokemons = () => {
    setOffset(offset + 10);
  };

  return (
    <div>
      <h1>Pokemons</h1>
      <ul className="pokemon-list">
        {pokemons &&
          pokemons.map((pokemon) => (
            <li key={pokemon.id}>
              <h2>
                #{pokemon.id} - {pokemon.name}
              </h2>
              {pokemon.types.length > 1 ? (
                <p>
                  {pokemon.types[0].type.name} | {pokemon.types[1].type.name}
                </p>
              ) : (
                <p>{pokemon.types[0].type.name}</p>
              )}
              <Link to={`/pokemon/${pokemon.id}`}>
                <img
                  src={pokemon.sprites.other.home.front_default}
                  alt={pokemon.name}
                />
              </Link>
            </li>
          ))}
      </ul>
      {loading && <div className="c-loader"></div>}
      {!loading && (
        <div className="btns">
          {offset === 140 ? (
            <Button disabled>Mostrar mais</Button>
          ) : (
            <Button onClick={handleNextPokemons}>Mostrar mais</Button>
          )}
        </div>
      )}
    </div>
  );
};

export default Pokemons;

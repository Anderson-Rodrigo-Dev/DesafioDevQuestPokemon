import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./Pokemon.css";

const Pokemon = () => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState(null);
  const types = [];

  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(url);
      const json = await res.json();

      setPokemon(json);
    };
    fetchData();
  }, [url]);

  if (pokemon) {
    types.push(pokemon.types.map((type) => type.type.name));
  }

  return (
    <>
      <Link to={"/"}>Voltar</Link>
      {pokemon && (
        <div>
          <h2>
            {pokemon.id} - {pokemon.name}
          </h2>
          {types[0].length > 1 ? (
            <p>
              {types[0][0]} | {types[0][1]}
            </p>
          ) : (
            <p>{types[0][0]}</p>
          )}

          <img src={pokemon.sprites.other.home.front_default} alt="" />
          <div>
            <h2>Movimentos</h2>

            <p>{pokemon.moves[0].move.name}</p>
            <p>{pokemon.moves[1].move.name}</p>
            <p>{pokemon.moves[2].move.name}</p>
            <p>{pokemon.moves[3].move.name}</p>
            <p>{pokemon.moves[4].move.name}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Pokemon;

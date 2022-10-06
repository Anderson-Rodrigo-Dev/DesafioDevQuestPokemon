import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Pokemon = () => {
  let { id } = useParams();
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

  //GAMBIARRAS
  if (pokemon) {
    types.push(pokemon.types.map((type) => type.type.name));
  }

  id = parseInt(id);
  return (
    <>
      <Link to={`/pokemon/${id - 1}`}>Voltar</Link>
      <Link to={`/pokemon/${id + 1}`}>Voltar</Link>
      {pokemon && (
        <div>
          <p>
            {pokemon.id} - {pokemon.name}
          </p>

          <div>
            {pokemon.types.map((type, index) => (
              <span key={index}>{type.type.name}</span>
            ))}
            {/* <S.Types>{pokemon.types[1]?.type.name}</S.Types> */}
          </div>

          <img
            src={pokemon.sprites.other.home.front_default}
            alt={pokemon.name}
          />
          <div>
            <h2>Movimentos</h2>

            {pokemon.moves.slice(0, 4).map((move, index) => {
              return <p key={index}>{move.move.name}</p>;
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default Pokemon;

import * as S from "../Pokemons/Styles";

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Type } from "../../components/Type/Type";

const TypePage = () => {
  let { type } = useParams();
  const [pokemons, setPokemons] = useState();
  const url = `https://pokeapi.co/api/v2/type/${type}`;

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(url);
      const json = await res.json();

      setPokemons(json.pokemon);
    };

    fetchData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);

  return (
    <S.UnordeList>
      {pokemons &&
        pokemons.map((pokemon, index) => {
          return <Type pokemon={pokemon} key={index} />;
        })}
    </S.UnordeList>
  );
};

export default TypePage;

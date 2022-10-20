import { useState, useEffect } from "react";

export const GetPokemonInfo = (url) => {
  const [pokemon, setPokemon] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(url);
      const json = await res.json();

      setPokemon(json);
    };
    
    fetchData();
    
    console.log(pokemon)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);

  return { pokemon };
};

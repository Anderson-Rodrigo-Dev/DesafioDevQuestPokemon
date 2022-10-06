import { useState, useEffect } from "react";

export const useFetch = (offset) => {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const getPokemon = async (pokemon) => {
      const res = await fetch(pokemon.url);
      return await res.json();
    };

    async function loadMorePokemons(offset) {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/?limit=10&offset=${offset}`
      );
      const json = await response.json();

      return json.results;
    }

    async function fetchData () {
      const pokemonNames = await loadMorePokemons(offset);
      const pokemonsPromises = pokemonNames.map(
        async (pokemon) => await getPokemon(pokemon)
      );
      const pokemonsData = await Promise.all(pokemonsPromises);

      setPokemons([...pokemons, ...pokemonsData]);

      setLoading(false);
    };

    fetchData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [offset]);

  return { pokemons, loading };
};

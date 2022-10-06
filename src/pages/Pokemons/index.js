import * as S from "./Styles";

import { Button } from "../../components/Button/Button";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useFetch } from "../../hooks/PokeApi/usePokeApi";
import { useThemeContext } from "../../hooks/useThemeToggler/useThemeContext";

const Pokemons = () => {
  const { theme } = useThemeContext()
  
  const [offset, setOffset] = useState(0);

  const { pokemons, loading } = useFetch(offset);

  const handleNextPokemons = () => {
    setOffset(offset + 10);
  };

  return (
    <div>
      <S.UnordeList>
        {pokemons &&
          pokemons.map((pokemon) => (
            <S.List
              key={pokemon.id}
              style={{
                color: theme.color,
                backgroundImage: theme.linearGradient,
              }}
            >
              <S.SubTitle style={{ color: theme.color }}>
                {pokemon.id} - {pokemon.name}
              </S.SubTitle>
              {/* GAMBIARRA QUE PRETENDO MODIFICAR */}
              {pokemon.types.length > 1 ? (
                <div>
                  <S.Types style={{ color: theme.color }}>
                    {pokemon.types[0].type.name}
                  </S.Types>
                  <S.Types style={{ color: theme.color }}>
                    {pokemon.types[1].type.name}
                  </S.Types>
                </div>
              ) : (
                <div>
                  <S.Types style={{ color: theme.color }}>
                    {pokemon.types[0].type.name}
                  </S.Types>
                </div>
              )}
              <Link to={`/pokemon/${pokemon.id}`}>
                <S.Image
                  src={pokemon.sprites.other.home.front_default}
                  alt={pokemon.name}
                />
              </Link>
            </S.List>
          ))}
      </S.UnordeList>
      {loading && <S.Rotate></S.Rotate>}
      {!loading && <Button onClick={handleNextPokemons}>Mostrar mais</Button>}
    </div>
  );
};

export default Pokemons;

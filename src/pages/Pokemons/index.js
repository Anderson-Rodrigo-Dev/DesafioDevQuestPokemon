import * as S from "./styles";

import { Button } from "../../components/Buttons/defaultButton/Button";
import { useState } from "react";
import { Link } from "react-router-dom";
import { PokemonList } from "../../hooks/PokemonList/usePokemonList";
import { useThemeContext } from "../../hooks/useThemeToggler/useThemeContext";

const Pokemons = () => {
  const { theme } = useThemeContext();

  const [offset, setOffset] = useState(0);

  const { pokemons, loading } = PokemonList(offset);

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
                backgroundImage: theme.cardGradient,
              }}
            >
              <S.SubTitle style={{ color: theme.color }}>
                {pokemon.id} - {pokemon.name}
              </S.SubTitle>
              <div>
                {pokemon.types.map((type, index) => (
                  <S.Types key={index}>{type.type.name}</S.Types>
                ))}
              </div>
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
      {!loading && (
        <Button
          onClick={handleNextPokemons}
          style={{
            color: theme.buttonColor,
            background: theme.buttonBackground,
          }}
        >
          Mostrar mais
        </Button>
      )}
    </div>
  );
};

export default Pokemons;

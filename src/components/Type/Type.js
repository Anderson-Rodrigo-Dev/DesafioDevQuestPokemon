import * as S from "../../pages/Pokemons/styles";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useThemeContext } from "../../hooks/useThemeToggler/useThemeContext";

const Type = ({ pokemon, index }) => {
  const { theme } = useThemeContext();
  const [pokemons, setPokemons] = useState();

  useEffect(() => {
    const fetchType = async () => {
      const res = await fetch(pokemon.pokemon.url);
      const json = await res.json();

      setPokemons(json);
    };

    fetchType();
  }, [pokemon.pokemon.url]);

  return (
    <>
      {pokemons && (
        <S.List
          key={pokemons.id}
          style={{
            color: theme.color,
            backgroundImage: theme.cardGradient,
          }}
        >
          <S.SubTitle style={{ color: theme.color }}>
            {pokemons.id} - {pokemons.name}
          </S.SubTitle>
          <div>
            {pokemons.types.map((type, index) => (
              <S.Types key={index}>{type.type.name}</S.Types>
            ))}
          </div>
          <Link to={`/pokemon/${pokemons.id}`}>
            <S.Image
              src={pokemons.sprites.other.home.front_default}
              alt={pokemons.name}
            />
          </Link>
        </S.List>
      )}
    </>
  );
};

export { Type };

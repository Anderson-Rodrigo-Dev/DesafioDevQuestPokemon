import * as S from "./Styles";

import { useParams } from "react-router-dom";
import { useThemeContext } from "../../hooks/useThemeToggler/useThemeContext";
import { PokemonInfo } from "../../hooks/PokemonInfo/getPokemonInfo";
import { Ability } from "../../components/Ability/Ability";

const Pokemon = () => {
  let { id } = useParams();
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

  const { theme } = useThemeContext();
  const { pokemon } = PokemonInfo(url);

  return (
    <>
      {pokemon && (
        <S.ContainerPokemon
          style={{
            color: theme.color,
            backgroundImage: theme.cardGradient,
          }}
        >
          <S.ContainerName>
            <S.Title2 style={{ color: theme.color }}>
              {pokemon.id} - {pokemon.name}
            </S.Title2>
            <div>
              {pokemon.types.map((type, index) => (
                <S.Types key={index}>{type.type.name}</S.Types>
              ))}
            </div>
          </S.ContainerName>

          <S.ContainerImageAndDetails>
            <S.Image
              src={pokemon.sprites.other.home.front_default}
              alt={pokemon.name}
            />

            <S.DetailsContainer>
              <S.Title3 style={{ color: theme.color }}>Abilities</S.Title3>
              <S.MovesDetails className="abilities-list">
                {pokemon.abilities.map((pokemon, index) => {
                  return <Ability pokemon={pokemon} key={index} />;
                })}
              </S.MovesDetails>

              <S.Title3 style={{ color: theme.color }}>Moves</S.Title3>
              <S.MovesDetails>
                {pokemon.moves.map((move, index) => {
                  return (
                    <S.Text key={index} style={{ color: theme.color }}>
                      {move.move.name}
                    </S.Text>
                  );
                })}
              </S.MovesDetails>
            </S.DetailsContainer>
          </S.ContainerImageAndDetails>
        </S.ContainerPokemon>
      )}
    </>
  );
};

export default Pokemon;

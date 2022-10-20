import * as S from "./Styles";

import { useParams } from "react-router-dom";
import { useThemeContext } from "../../hooks/useThemeToggler/useThemeContext";
import { GetPokemonInfo } from "../../hooks/PokemonInfo/getPokemonInfo";
import { Ability } from "../../components/Ability/Ability";

const Pokemon = () => {
  let { id } = useParams();
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

  const { theme } = useThemeContext();
  const { pokemon } = GetPokemonInfo(url);

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
            <S.StatusContainer >
              <S.StatusInfo >
                <S.Title4 style={{ color: theme.color }} >HP: {pokemon.stats[0].base_stat}</S.Title4>
                <S.BarraStatus>
                  <S.BarraHP HP={pokemon.stats[0].base_stat} />
                </S.BarraStatus>
              </S.StatusInfo>
              <S.StatusInfo>
                <S.Title4 style={{ color: theme.color }}>ATK: {pokemon.stats[1].base_stat}</S.Title4>
                <S.BarraStatus>
                  <S.BarraATK ATK={pokemon.stats[1].base_stat} />
                </S.BarraStatus>
              </S.StatusInfo>
              <S.StatusInfo>
                <S.Title4 style={{ color: theme.color }}>DEF: {pokemon.stats[2].base_stat}</S.Title4>
                <S.BarraStatus>
                  <S.BarraDef Def={pokemon.stats[2].base_stat} />
                </S.BarraStatus>
              </S.StatusInfo>
              <S.StatusInfo>
                <S.Title4 style={{ color: theme.color }}>SATK: {pokemon.stats[3].base_stat}</S.Title4>
                <S.BarraStatus>
                  <S.BarraSatk Satk={pokemon.stats[3].base_stat} />
                </S.BarraStatus>
              </S.StatusInfo>
              <S.StatusInfo>
                <S.Title4 style={{ color: theme.color }}>SDEF: {pokemon.stats[4].base_stat}</S.Title4>
                <S.BarraStatus>
                  <S.BarraSdef Sdef={pokemon.stats[4].base_stat} />
                </S.BarraStatus>
              </S.StatusInfo>
              <S.StatusInfo>
                <S.Title4 style={{ color: theme.color }}>SPEED: {pokemon.stats[5].base_stat}</S.Title4>
                <S.BarraStatus>
                  <S.BarraSpeed Speed={pokemon.stats[5].base_stat} />
                </S.BarraStatus>
              </S.StatusInfo>
            </S.StatusContainer>
          </S.ContainerImageAndDetails>
          
          <S.DetailsContainer>
            <S.Title3 style={{ color: theme.color }}>Abilities</S.Title3>
            <S.MovesDetails>
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
        </S.ContainerPokemon>
      )}
    </>
  );
};

export default Pokemon;

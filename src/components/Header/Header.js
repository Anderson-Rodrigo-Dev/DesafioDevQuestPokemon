import * as S from "./Styles";

import PokemonLogo from "../../images/Pokemonlogo.png";

import { Link } from "react-router-dom";
import { ThemeTogglerButton } from "../ThemeTogglerButton/ThemeTogglerButton";

const Header = () => {
  return (
    <S.Header>
      <Link to={"/"}>
        <S.Logo src={PokemonLogo}></S.Logo>
      </Link>
      <S.ThemeButton>
        <ThemeTogglerButton />
      </S.ThemeButton>
    </S.Header>
  );
};

export default Header;

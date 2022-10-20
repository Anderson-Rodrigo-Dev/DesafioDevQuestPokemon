import * as S from "./Styles";

import PokemonLogo from "../../assets/images/Pokemonlogo.png";
import Sidebar from "../SideBar/Sidebar";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Sidebar />
      <div>
        <Link to="/">
          <S.Logo src={PokemonLogo}></S.Logo>
        </Link>
      </div>
    </>
  );
};

export default Header;

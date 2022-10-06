import { Link } from "react-router-dom";
import { ThemeTogglerButton } from "../ThemeTogglerButton/ThemeTogglerButton";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <h1>Pokemon</h1>
      <ThemeTogglerButton />
      <Link to={"/"}>Início</Link>
    </div>
  );
};

export default Header;

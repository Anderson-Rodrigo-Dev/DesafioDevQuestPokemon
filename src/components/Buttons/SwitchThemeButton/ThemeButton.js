import "./ThemeButton.css";

import * as FaIcon from "react-icons/fa";
import { useThemeContext } from "../../../hooks/useThemeToggler/useThemeContext";

const ThemeButton = (props) => {

  const {theme} = useThemeContext()

  console.log(theme)

  return (
    <label htmlFor="checkbox" className="toggler">
      <input type="checkbox" id="checkbox" {...props}/>
      <span className="ball" style={{backgroundColor: theme.buttonBackground}}></span>
      <FaIcon.FaSun className="sun" />
      <FaIcon.FaMoon className="moon" />
    </label>
  );
};

export default ThemeButton;

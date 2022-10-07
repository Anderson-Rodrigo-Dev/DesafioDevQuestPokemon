import "./ThemeButton.css";

import { FaSun, FaMoon } from "react-icons/fa";

const ThemeButton = (props) => {

  return (
    <label htmlFor="checkbox" className="toggler">
      <input type="checkbox" id="checkbox" {...props}/>
      <span className="ball"></span>
      <FaSun className="sun" />
      <FaMoon className="moon" />
    </label>
  );
};

export default ThemeButton;

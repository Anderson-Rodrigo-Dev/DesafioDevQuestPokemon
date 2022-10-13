import "./ThemeButton.css";

import * as FaIcon from "react-icons/fa";

const ThemeButton = (props) => {

  return (
    <label htmlFor="checkbox" className="toggler">
      <input type="checkbox" id="checkbox" {...props}/>
      <span className="ball"></span>
      <FaIcon.FaSun className="sun" />
      <FaIcon.FaMoon className="moon" />
    </label>
  );
};

export default ThemeButton;

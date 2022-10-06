import { createContext, useState } from "react";

export const themes = {
  light: {
    color: "#231835",
    background: "#eeeeee",
    linearGradient:
      "linear-gradient(to bottom, rgba(117,180,255,0.9) 0%, rgba(207,255,237,1) 100%)",
    buttonColor: '#231835',
    buttonBackground: 'rgba(207,255,237,1)',
  },
  dark: {
    color: "#ffffff",
    background: "#231835",
    linearGradient: "linear-gradient(to bottom, #1d0d50 0%, #5c33a7 80%)",
    buttonColor: '#231835',
    buttonBackground: '#f3f3f3f3',
  },
};

export const ThemeContext = createContext({});

export const ThemeProvider = (props) => {
  const [theme, setTheme] = useState(themes.dark);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

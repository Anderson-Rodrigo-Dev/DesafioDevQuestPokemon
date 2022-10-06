import { useContext } from "react";
import { ThemeContext, themes } from "../../contexts/ThemeContext";
import { Button } from "../Button/Button";

export const ThemeTogglerButton = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div>
      <Button
        onClick={() =>
          setTheme(theme === themes.light ? themes.dark : themes.light)
        }
        style={{
          color: theme.buttonColor,
          backgroundColor: theme.buttonBackground,
        }}
      >
        Alterar modo
      </Button>
    </div>
  );
};

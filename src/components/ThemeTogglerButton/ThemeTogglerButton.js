import { themes } from "../../contexts/styles";
import { Button } from "../Button/Button";
import { useThemeContext } from "../../hooks/useThemeToggler/useThemeContext";

export const ThemeTogglerButton = () => {
  const { theme, setTheme } = useThemeContext()

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

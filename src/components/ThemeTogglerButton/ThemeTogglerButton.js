import { themes } from "../../contexts/styles";
import { useThemeContext } from "../../hooks/useThemeToggler/useThemeContext";
import ThemeButton from "../Buttons/SwitchThemeButton/ThemeButton";

export const ThemeTogglerButton = () => {
  const { theme, setTheme } = useThemeContext();

  return (
    <div>
      <ThemeButton
        onChange={() =>
          setTheme(theme === themes.light ? themes.dark : themes.light)
        }
        style={{
          color: theme.color,
          backgroundColor: theme.background,
        }}
      />
    </div>
  );
};

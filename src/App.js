import * as S from "./Styles/GlobalStyles";

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Pokemon from "./pages/Pokemon";
import Pokemons from "./pages/Pokemons";
import { NotFound } from "./pages/NotFound";
import { useThemeContext } from "./hooks/useThemeToggler/useThemeContext";

function App() {
  const { theme } = useThemeContext();

  return (
    <S.GlobalDefault style={{ background: theme.background }}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Header />
        <Routes>
          <Route path="/" element={<Pokemons />} />
          <Route path="/pokemon/:id" element={<Pokemon />} />
          <Route path="/Error_404" element={<NotFound />} />
          <Route
            path="/pokemon/0"
            element={<Navigate replace to={"/Error_404"} />}
          />
          <Route
            path="/pokemon/906"
            element={<Navigate replace to={"/Error_404"} />}
          />
          <Route path="*" element={<Navigate replace to={"/Error_404"} />} />
        </Routes>
      </BrowserRouter>
    </S.GlobalDefault>
  );
}

export default App;

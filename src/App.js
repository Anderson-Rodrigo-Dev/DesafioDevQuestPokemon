import * as S from "./Styles/GlobalStyles";

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import { ThemeContext } from "./contexts/ThemeContext";
import Pokemon from "./pages/Pokemon";
import Pokemons from "./pages/Pokemons";
import { useContext } from "react";
import { NotFound } from "./pages/NotFound";

function App() {
  const { theme } = useContext(ThemeContext);

  console.log(theme);

  return (
    <S.GlobalDefault style={{ backgroundColor: theme.background }}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Pokemons />} />
          <Route path="/pokemon/:id" element={<Pokemon />} />
          <Route path="/Error_404" element={<NotFound />} />
          <Route path="/pokemon/0" element={<Navigate replace to={"/Error_404"}/>}/>
          <Route path="/pokemon/906" element={<Navigate replace to={"/Error_404"}/>}/>
          <Route path="*" element={<Navigate replace to={"/Error_404"}/>} />
        </Routes>
      </BrowserRouter>
    </S.GlobalDefault>
  );
}

export default App;

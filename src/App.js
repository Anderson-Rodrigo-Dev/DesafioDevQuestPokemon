import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Pokemon from "./pages/Pokemon";
import Pokemons from "./pages/Pokemons";

function App() {
  return (
    <div className="App">
      <h1>Pokedex</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Pokemons />}/>
          <Route path="/pokemon/:id" element={<Pokemon />}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;

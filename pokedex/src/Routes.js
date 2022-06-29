import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Pokedex from "./pages/Pokedex";
import PokemonDetails from "./pages/PokemonDetails";


const Router = () => {
    return (
    <BrowserRouter>
    <Routes>
      <Route index element={<Home/>}/>

      <Route path="/pokedex" element={<Pokedex/>}/>
      <Route path="/pokemon-details" element={<PokemonDetails/>}/>

    </Routes>
    </BrowserRouter>
    )
}

export default Router
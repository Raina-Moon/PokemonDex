import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Home";
import Dex from "../Dex";
import PokemonDetail from "../../../components/PokemonDetail";
import { PokemonProvider } from "../../../components/PokemonContext";

const Router = () => {
  return (
    <PokemonProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dex" element={<Dex />} />
          <Route path="/pokemonDetail/:id" element={<PokemonDetail />} />
        </Routes>
      </BrowserRouter>
      </PokemonProvider>
  );
};

export default Router;

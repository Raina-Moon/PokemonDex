import React, { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";

const PokemonContext = createContext(null);

export const usePokemon = () => useContext(PokemonContext);

export const PokemonProvider = ({ children }) => {
  const [selectedPokemons, setSelectedPokemons] = useState([]);

  const addPokemon = (pokemon) => {
    if (selectedPokemons.length >= 6) {
      toast.error("포켓몬 6마리가 꽉 찼어요!",{
        position: "top-right",
        autoClose: 4000, 
      });
      return;
    }

    if (!selectedPokemons.some((e) => e.id === pokemon.id)) {
      return setSelectedPokemons([...selectedPokemons, pokemon]);
    } else {
      toast.warning("이미 선택된 포켓몬입니다.",{
        position: "top-right",
        autoClose: 4000, 
      });
      return;
    }
  };

  const deletePokemon = (pokemon) => {
    setSelectedPokemons(selectedPokemons.filter((e) => e.id !== pokemon.id));
    toast.info("포켓몬이 삭제되었습니다.",{
      position: "top-right",
      autoClose: 4000, 
    })
  };

  const value = {
    selectedPokemons,
    addPokemon,
    deletePokemon,
  };

  return (
    <PokemonContext.Provider value={value}>{children}</PokemonContext.Provider>
  );
};

import { toast } from "react-toastify";
import { configureStore, createSlice } from "@reduxjs/toolkit";

const pokemonSlice = createSlice({
  name: "selectedPokemons",
  initialState: {
    selectedPokemons: [],
  },
  reducers: {
    addPokemon: (state, action) => {
      toast.info("해당 포켓몬이 포켓몬 볼에 추가 되었습니다.");
      if (state.selectedPokemons.length >= 6) {
        toast.error("포켓몬 6마리가 꽉 찼어요!", {
          position: "top-right",
          autoClose: 4000,
        });
        return;
      }

      if (!state.selectedPokemons.some((e) => e.id === action.payload.id)) {
        // return setSelectedPokemons([...selectedPokemons, pokemon]);
        state.selectedPokemons.push(action.payload);
      } else {
        toast.warning("이미 선택된 포켓몬입니다.", {
          position: "top-right",
          autoClose: 4000,
        });
        return;
      }
    },
    deletePokemon: (state, action) => {
      state.selectedPokemons = state.selectedPokemons.filter(
        (e) => e.id !== action.payload.id
      );
      toast.info("포켓몬이 삭제되었습니다.", {
        position: "top-right",
        autoClose: 4000,
      });
    },
  },
});

export const { addPokemon, deletePokemon } = pokemonSlice.actions;

const store = configureStore({
  reducer: {
    selectedPokemons: pokemonSlice.reducer,
  },
});

export default store;

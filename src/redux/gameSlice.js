import { createSlice } from "@reduxjs/toolkit";
import games from "../data/games";

const gameSlice = createSlice({
  name: "games",
  initialState: { allGames: games, filteredGames: games, search: "" },
  reducers: {
    setSearch: (state, action) => {
      state.search = action.payload;
      state.filteredGames = state.allGames.filter(g => g.title.toLowerCase().includes(action.payload.toLowerCase()));
    },
    filterByCategory: (state, action) => {
      const category = action.payload;
      state.filteredGames = category === "All" ? state.allGames : state.allGames.filter(g => g.category === category);
    }
  }
});

export const { setSearch, filterByCategory } = gameSlice.actions;
export default gameSlice.reducer;

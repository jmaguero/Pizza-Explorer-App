// src/store/user/slice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "Maria",
  id: 42,
  favorites: []

};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    toggleFavorite: (state, action) => {

      const newFavorite = state.favorites.includes(action.payload)
        ? state.favorites.filter(favoriteId => favoriteId !== action.payload)
        : [...state.favorites, action.payload]
      state.favorites = newFavorite
    }
  }
});

export const { toggleFavorite } = userSlice.actions;

export default userSlice.reducer;
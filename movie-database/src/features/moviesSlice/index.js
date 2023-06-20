import { createSlice } from "@reduxjs/toolkit";
import data from "../../utils/constant/data";

// Buat slice
const moviesSlice = createSlice({
    name: "Movies Slice",
    initialState: {
        movies: data,
    },
    reducers: {
        updateMovies(state, action) {
            state.movies = action.payload ;            
        },
        addMovie(state, action) {
            // addMovie to movies
            state.movies.push(action.payload);
        },
        deleteMovie() {},
    },
});

// Generate Action dan Reducer
const { addMovie, updateMovies } = moviesSlice.actions;
const moviesReducer = moviesSlice.reducer;

export default moviesReducer;
export { addMovie, updateMovies };
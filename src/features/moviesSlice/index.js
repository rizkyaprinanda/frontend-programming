import { createSlice } from "@reduxjs/toolkit";
import data from "../../utils/constant/data";

// Buat slice
const moviesSlice = createSlice({
    name: "Movies Slice",
    initialState: {
        movies: data,
    },
    reducers: {
        // Membuat reducer updateMovies: untuk update movie         
        updateMovies(state, action) {
            state.movies = action.payload ;            
        },
        /**
         * action addMovie menerima 2 param: state dan action
         * state berisi state movies saat ini
         * action berisi payload atau data yang dikirim
         */
        addMovie(state, action) {
            // addMovie to movies
            state.movies.push(action.payload);
        },
    },
});

// Generate Action dan Reducer
const { addMovie, updateMovies } = moviesSlice.actions;
const moviesReducer = moviesSlice.reducer;

export default moviesReducer;
export { addMovie, updateMovies };
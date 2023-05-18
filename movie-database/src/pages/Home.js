// Import Footer, Hero, Movies, Navbar Component
import { useState } from "react";
import AddMovieForm from "../components/AddMovieForm/AddMovieForm";
import Hero from "../components/Hero/Hero";
import Movies from "../components/Movies/Movies";
import data from "../utils/constant/data";


/**
 * Membuat Component Home.
 * Menampilkan Component Home.
 * Menampung Navbar, Main, dan Footer Component.
 */
function Home(){
    /**
     * Mengangkat stave movies: Lifting State.
     * Dari Component Movies ke Component Home
     * Agar bisa digunakan oleh Component yang lain
     */
    const [movies, setMovies] = useState(data);

    return(
        <>
            <Hero />
            <Movies movies={movies} setMovies={setMovies} />
            <AddMovieForm movies={movies} setMovies={setMovies} />
        </>
    );
}

export default Home;
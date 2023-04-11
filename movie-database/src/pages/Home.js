// Import Footer, Hero, Movies, Navbar Component
import { useState } from "react";
import AddMovieForm from "../components/AddMovieForm/AddMovieForm";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import Movies from "../components/Movies/Movies";
import Navbar from "../components/Navbar/Navbar";
import data from "../utils/constant/data";


/**
 * Membuat Component Main.
 * Menampung Hero dan Movies
 */
function Main() {
    const [movies, setMovies] = useState(data);

    return (

        <main>
            <Hero />
            <Movies movies={movies} setMovies={setMovies} />
            <AddMovieForm movies={movies} setMovies={setMovies} />            
        </main>
    );
}

/**
 * Membuat Component Home.
 * Menampilkan Component Home.
 * Menampung Navbar, Main, dan Footer Component.
 */
function Home(){
    return(
        <>
            <Navbar />
            <Main />
            <Footer />
        </>
    );
}

export default Home;
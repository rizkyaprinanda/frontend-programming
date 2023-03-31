// Import Footer, Hero, Movies, Navbar Component
import AddMovieForm from "../components/AddMovieForm/AddMovieForm";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import Movies from "../components/Movies/Movies";
import Navbar from "../components/Navbar/Navbar.js";

/**
 * Membuat Component Main.
 * Menampung Hero dan Movies
 */
function Main() {
    return (
        <main>
            <Hero />
            <Movies />
            <AddMovieForm />            
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
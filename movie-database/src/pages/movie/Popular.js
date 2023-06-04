import axios from "axios";
import { useEffect, useState } from "react";
import Movies from "../../components/Movies/Movies";
import Hero from "../../components/Hero/Hero";
import Heading from "../../components/ui/Heading";

function PopularMovie() {
    const [movies, setMovies] = useState([]);

    const API_KEY = process.env.REACT_APP_API_KEY;
    const URL = `http://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;

    async function fetchPopularMovies() {
        // Melakukan side effect: fetch data movie (api)        
        const response = await axios(URL);
        setMovies(response.data.results);
                
        };

    useEffect(() => {
        
        fetchPopularMovies();
        // eslint-disable-next-line
    }, []);
    
    return (
        <div>
            <Hero />            
            <Heading as="h2" align="center">Popular Movie</Heading>  
            <Movies movies={movies} setMovies={setMovies} />          
        </div>
    )
}

export default PopularMovie;
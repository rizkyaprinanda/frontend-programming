import axios from "axios";
import { useEffect, useState } from "react";
import Movies from "../../components/Movies/Movies";
import Hero from "../../components/Hero/Hero";
import ENDPOINTS from "../../utils/constant/endpoints";

function PopularMovie() {
    const [movies, setMovies] = useState([]);

    async function fetchPopularMovies() {
        // Melakukan side effect: fetch data movie (api)        
        const response = await axios(ENDPOINTS.POPULAR);
        setMovies(response.data.results);
                
        };

    useEffect(() => {
        
        fetchPopularMovies();
        // eslint-disable-next-line
    }, []);
    
    return (
        <div>
            <Hero />     
            <Movies movies={movies} setMovies={setMovies} title="Popular Movies" />          
        </div>
    )
}

export default PopularMovie;
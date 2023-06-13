import axios from "axios";
import { useEffect, useState } from "react";
import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies";
import ENDPOINTS from "../../utils/constant/endpoints";

function NowPlayingMovie() {
    const [movies, setMovies] = useState([]);

    async function fetchNowPlayingMovies() {
        // Melakukan side effect: fetch data movie (api
        const response = await axios(ENDPOINTS.NOW);
        setMovies(response.data.results);
    };

    useEffect(() => {
        fetchNowPlayingMovies();
        // eslint-disable-next-line
    }, []);

    return (
        <div>            
            <Hero />
            <Movies movies={movies} setMovies={setMovies} title="Now Playing Movie"/>
        </div>
    )
}

export default NowPlayingMovie;
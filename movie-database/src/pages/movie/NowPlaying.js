import axios from "axios";
import { useEffect, useState } from "react";
import Heading from "../../components/ui/Heading";
import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies";

function NowPlayingMovie() {
    const [movies, setMovies] = useState([]);

    const API_KEY= process.env.REACT_APP_API_KEY;
    const URL = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`;

    async function fetchNowPlayingMovies() {
        // Melakukan side effect: fetch data movie (api
        const response = await axios(URL);
        setMovies(response.data.results);
    };

    useEffect(() => {
        fetchNowPlayingMovies();
        // eslint-disable-next-line
    }, []);

    return (
        <div>            
            <Hero />
            <Heading as="h2" align="center">Now Playing Movie</Heading>          
            <Movies movies={movies} setMovies={setMovies} />
        </div>
    )
}

export default NowPlayingMovie;
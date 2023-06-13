import axios from "axios";
import { useEffect, useState } from "react";
import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies";
import ENDPOINTS from "../../utils/constant/endpoints";

function TopRatedMovie() {
    const [movies, setMovies] = useState([]);

    async function fetchTopRatedMovies() {
        // Melakukan side effect: fetch data movie (api
        const response = await axios(ENDPOINTS.TOP);
        setMovies(response.data.results);
    }

    useEffect(() => {
        fetchTopRatedMovies();
        // eslint-disable-next-line
    }, []);
    return (
        <div>
        <Hero />
            <Movies movies={movies} setMovies={setMovies} title="Top Rated Movie" />
        </div>
    )
}

export default TopRatedMovie;
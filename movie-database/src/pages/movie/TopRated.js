import axios from "axios";
import { useEffect } from "react";
import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies";
import ENDPOINTS from "../../utils/constant/endpoints";
import { useDispatch } from "react-redux";
import { updateMovies } from "../../features/moviesSlice";

function TopRatedMovie() {
    
    const dispatch = useDispatch();

    async function fetchTopRatedMovies() {
        // Melakukan side effect: fetch data movie (api
        const response = await axios(ENDPOINTS.TOP);
        dispatch(updateMovies(response.data.results));
    }

    useEffect(() => {
        fetchTopRatedMovies();
        // eslint-disable-next-line
    }, []);
    return (
        <div>
        <Hero />
            <Movies title="Top Rated Movie" />
        </div>
    )
}

export default TopRatedMovie;
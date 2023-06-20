import axios from "axios";
import { useEffect } from "react";
import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies";
import ENDPOINTS from "../../utils/constant/endpoints";
import { useDispatch } from "react-redux";
import { updateMovies } from "../../features/moviesSlice";

function NowPlayingMovie() {

    const dispatch = useDispatch();

    async function fetchNowPlayingMovies() {
        // Melakukan side effect: fetch data movie (api
        const response = await axios(ENDPOINTS.NOW);
        dispatch(updateMovies(response.data.results));
    };

    useEffect(() => {
        fetchNowPlayingMovies();
        // eslint-disable-next-line
    }, []);

    return (
        <div>            
            <Hero />
            <Movies />
        </div>
    )
}

export default NowPlayingMovie;
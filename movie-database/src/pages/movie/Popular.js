import axios from "axios";
import { useEffect } from "react";
import Movies from "../../components/Movies/Movies";
import Hero from "../../components/Hero/Hero";
import ENDPOINTS from "../../utils/constant/endpoints";
import { useDispatch } from "react-redux";
import { updateMovies } from "../../features/moviesSlice";

function PopularMovie() {

    const dispatch = useDispatch();

    async function fetchPopularMovies() {
        // Melakukan side effect: fetch data movie (api)        
        const response = await axios(ENDPOINTS.POPULAR);
        dispatch(updateMovies(response.data.results));
        };

    useEffect(() => {
        
        fetchPopularMovies();
        // eslint-disable-next-line
    }, []);
    
    return (
        <div>
            <Hero />     
            <Movies title="Popular Movies" />          
        </div>
    )
}

export default PopularMovie;
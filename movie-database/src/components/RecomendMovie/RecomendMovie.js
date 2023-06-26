import { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Movies from "../../components/Movies/Movies";
import ENDPOINTS from "../../utils/constant/endpoints";
import { useDispatch } from "react-redux";
import { updateMovies } from "../../features/moviesSlice";


function RecomendMovie() {
    
    const dispatch = useDispatch();

    const params = useParams();

    async function getDetailMovies(){

        const response = await axios(ENDPOINTS.RECOMEND(params.id));        
        dispatch(updateMovies(response.data.results));
    }

    useEffect(() => {
        getDetailMovies();
        // eslint-disable-next-line
    }, [params.id]);

    return(
        <>
            <Movies title="Recomendation Movie"/>
        </>
    )
}

export default RecomendMovie;
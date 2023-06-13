import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Movies from "../../components/Movies/Movies";
import ENDPOINTS from "../../utils/constant/endpoints";


function RecomendMovie() {
    const [movies, setMovies] = useState([]);
    const params = useParams();

    async function getDetailMovies(){

        const response = await axios(ENDPOINTS.RECOMEND(params.id));        
        setMovies(response.data.results);
    }

    useEffect(() => {
        getDetailMovies();
        // eslint-disable-next-line
    }, [params.id]);

    return(
        <>
            <Movies movies={movies} title="Recomendation Movie"/>
        </>
    )
}

export default RecomendMovie;
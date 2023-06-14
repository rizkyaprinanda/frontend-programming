import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import StyledDetail from "./Detail.styled";
import Heading from "../ui/Heading";
import Paragraph from "../ui/Paragraph";
import Button from "../ui/Button";
import ENDPOINTS from "../../utils/constant/endpoints";

function DetailMovie() {
    const params = useParams();
    const [movie, setMovie] = useState("");
    const genres = movie && movie.genres.map((genre) => genre.name).join(", ");
    const trailer = movie && movie.videos.results.length > 0 ? ENDPOINTS.VIDEO(movie) : "";
    const rating = movie && movie.vote_average.toFixed(1);

    async function fetchDetailMovie() {
        // lakukan fetch detail movie
        const response = await axios(ENDPOINTS.DETAIL(params.id));
        setMovie(response.data);

        // eslint-disable-next-line
    }

    useEffect(()=> {
        fetchDetailMovie();
        // eslint-disable-next-line
    },[params.id]);

    return (
        <StyledDetail>
            <section>
                <div className="left">
                    <img 
                        src={`${ENDPOINTS.POSTER(movie)}`}
                        alt=""
                    />
                </div> 
                <div className="right">
                    <Heading as="h2">{movie.title}</Heading>
                    <Heading as="h3">
                    Genre: {genres}</Heading>
                    <Heading as="h4">
                    Rating: {rating}/10</Heading>
                    <Paragraph align="justify">
                        {movie.overview}
                    </Paragraph>
                    <Button size="lg" as="a" href={trailer} target="_blank">
                        Watch Trailer
                    </Button>
                </div>
            </section>
        </StyledDetail>
    );
}

export default DetailMovie;
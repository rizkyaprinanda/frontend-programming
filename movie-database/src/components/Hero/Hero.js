/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

import Button from "../ui/Button";
import Heading from "../ui/Heading";
import StyledHero from "./Hero.styled";
import Paragraph from "../ui/Paragraph";
import axios from "axios";
import ENDPOINTS from "../../utils/constant/endpoints";

function Hero() {
    // Membuat state movie
    const [movie, setMovie] = useState("");
    const genres = movie && movie.genres.map((genre) => genre.name).join(", ");
    const trailer = movie && ENDPOINTS.VIDEO(movie);
    const rating = movie && movie.vote_average.toFixed(1);
    

    // mengambil data dari trending movie
    async function fetchTrendingMovie() {
        // Melakukan side effect: fetch data movie (api)        
        const response = await axios(ENDPOINTS.HERO);
        const data = response.data.results;
        return data[Math.floor(Math.random() * data.length)];
        // eslint-disable-next-line
        };
  

    async function getDetailMovie() {
        const trendingMovie = await fetchTrendingMovie();
        const id = trendingMovie.id;
        const response = await axios(ENDPOINTS.DETAIL(id));
        
        setMovie(response.data);
        
    }

    useEffect(() => {
        getDetailMovie();
    }, []);
    


    return (
        <StyledHero>
            <section>
                <div className="left">
                    <Heading as="h2">{movie.Title || movie.title}</Heading>
                    <Heading as="h3">
                        Genre: {genres}
                    </Heading>
                    <Heading as="h4">Rating: {rating}/10</Heading>
                    <Paragraph align="justify">
                        {movie.overview}
                    </Paragraph>
                    <Button size="lg" as="a" href={trailer} target="_blank">Watch Trailer</Button>
                </div>
                <div className="right">
                    <img                    
                    src= {`${ENDPOINTS.BACKDROP(movie)}`}
                    alt= "placeholder"
                    />
                </div>
            </section>
        </StyledHero>
    );
}

export default Hero;
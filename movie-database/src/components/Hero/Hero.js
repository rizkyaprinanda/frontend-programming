/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

import Button from "../ui/Button";
import Heading from "../ui/Heading";
import StyledHero from "./Hero.styled";
import Paragraph from "../ui/Paragraph";
import axios from "axios";

function Hero() {
    // Membuat state movie
    const [movie, setMovie] = useState("");
    const API_KEY = process.env.REACT_APP_API_KEY;
    const genres = movie && movie.genres.map((genre) => genre.name).join(", ");
    const trailer = movie && `https://www.youtube.com/watch?v=${movie.videos.results[0].key}`;
    const rating = movie && movie.vote_average.toFixed(1);

    // mengambil data dari trending movie
    async function fetchTrendingMovie() {
        const URL = `http://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`;
        // Melakukan side effect: fetch data movie (api)        
        const response = await axios(URL);
        const data = response.data.results;
        return data[Math.floor(Math.random() * data.length)];
        // eslint-disable-next-line
        };
  

    async function getDetailMovie() {
        const trendingMovie = await fetchTrendingMovie();
        const id = trendingMovie.id;

        const URL = `http://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&append_to_response=videos`;

        const response = await axios(URL);
        
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
                    src= {`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
                    alt= "placeholder"
                    />
                </div>
            </section>
        </StyledHero>
    );
}

export default Hero;
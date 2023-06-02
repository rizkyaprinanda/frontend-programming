/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

import Button from "../ui/Button";
import Heading from "../ui/Heading";
import StyledHero from "./Hero.styled";
import Paragraph from "../ui/Paragraph";

function Hero() {
    // Membuat state movie
    const [movie, setMovie] = useState("");

    async function fetchMovie() {
        // Melakukan side effect: fetch data movie (api)        
        const response = await fetch("https://www.omdbapi.com/?apikey=fcf50ae6&i=tt2975590");
        const data = await response.json();
        
        setMovie(data);
        };
    useEffect(() => {
        
        fetchMovie();
    }, []);
    console.log(movie);
    return (
        <StyledHero>
            <section>
                <div className="left">
                    <Heading as="h2">{movie.Title}</Heading>
                    <Heading as="h3">
                        Genre: {movie.Genre}
                    </Heading>
                    <Paragraph>
                        {movie.Plot}
                    </Paragraph>
                    <Button variant="primary">Watch Movie</Button>
                </div>
                <div className="right">
                    <img                    
                    src= {movie.Poster}
                    alt= {movie.Title}
                    />
                </div>
            </section>
        </StyledHero>
    );
}

export default Hero;
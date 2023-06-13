import Heading from "../ui/Heading";
import Paragraph from "../ui/Paragraph";
import StyledMovie from "./Movie.styled";
import { Link } from "react-router-dom";

function Movie(props){
    // Destructing object props
    const { movie } = props;

    return(
        <StyledMovie>
            <img                 
                src={movie.poster || `http://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                alt={movie.title}                
            />
            <Link to={`/movie/${movie.id}`}>
                <Heading as="h3" align="center" color="primary">{movie.title}</Heading>
            </Link>            
            <Paragraph>{movie.year || movie.release_date}</Paragraph>
        </StyledMovie>
    );
}

export default Movie;
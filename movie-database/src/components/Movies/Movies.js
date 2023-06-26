import Movie from '../Movie/Movie';
import Heading from '../ui/Heading';
import styles from './Movies.module.css';
import { useSelector } from 'react-redux';

function Movies(props) {
    // destructing props
    const { title='Latest Movies' } = props;
    const movies = useSelector((store) => store.movies.movies);
    
    return (
        <div className={styles.container}>
            <section className={styles.movies}>
                <Heading as="h2" align="center">{title}</Heading>
                <div className={styles.movie__container}>
                    {  /*
                        * Looping data movies: map.
                        * Render Component Movie
                        * Kirim props movie
                    */}
                    {movies.map(function (movie) {
                            return <Movie key={movie.id} movie={movie} />
                        })
                    }
                </div>
                
            </section>
        </div>
    );
}

 export default Movies;
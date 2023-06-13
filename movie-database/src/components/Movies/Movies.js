import Movie from '../Movie/Movie';
import Heading from '../ui/Heading';
import styles from './Movies.module.css';
import { nanoid } from 'nanoid';

function Movies(props) {
    // destructing props
    const { title='Latest Movies', movies, setMovies } = props;

    // Buat fungsi tambah film
    // dijalankan ketika tombol diklik
    function tambahFilm() {
        const movie = {
            id: nanoid(4),
            title: "Spiral Jigsaw",
            year: "2021",
            type: "Movie",
            poster: "https://picsum.photos/300/400",
        };
        
        // Menambahkan movie ke state movies
        setMovies([...movies, movie]);
    }

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
                {/* Menambahkan event on Click */}
                <button onClick={tambahFilm}>Add Movie</button>
            </section>
        </div>
    );
}

 export default Movies;
import styles from './Movies.module.css';

function Movies() {
    return (
        <div className={styles.container}>
            <section className={styles.movies}>
                <h2 className={styles.movies__title}>Latest Movies</h2>
                <div className={styles.movie__container}>
                    <div className={styles.movie}>
                        <img 
                            className={styles.movie__image}
                            src="https://picsum.photos/300/400"
                            alt=""
                        />
                        <h3 className={styles.movie__title}>Movie Title</h3>
                        <p className={styles.movie__date}>Date</p>
                    </div>                    
                    <div className={styles.movie}>
                        <img 
                            className={styles.movie__image}
                            src="https://picsum.photos/300/400"
                            alt=""
                        />
                        <h3 className={styles.movie__title}>Avengers: Endgame</h3>
                        <p className={styles.movie__date}>26 April 2019</p>
                    </div>
                    <div className={styles.movie}>
                        <img 
                            className={styles.movie__image}
                            src="https://picsum.photos/300/400"
                            alt=""
                        />
                        <h3 className={styles.movie__title}>The Dark Knight</h3>
                        <p className={styles.movie__date}>18 Juli 2008</p>
                    </div>
                    <div className={styles.movie}>
                        <img 
                            className={styles.movie__image}
                            src="https://picsum.photos/300/400"
                            alt=""
                        />
                        <h3 className={styles.movie__title}>Inception</h3>
                        <p className={styles.movie__date}>16 Juli 2010</p>
                    </div>
                    <div className={styles.movie}>
                        <img 
                            className={styles.movie__image}
                            src="https://picsum.photos/300/400"
                            alt=""
                        />
                        <h3 className={styles.movie__title}>The Shawshank Redemption</h3>
                        <p className={styles.movie__date}>20 April 2018</p>
                    </div>
                    <div className={styles.movie}>
                        <img 
                            className={styles.movie__image}
                            src="https://picsum.photos/300/400"
                            alt=""
                        />
                        <h3 className={styles.movie__title}>The Batman</h3>
                        <p className={styles.movie__date}>4 Maret 2022</p>
                    </div>
                    <div className={styles.movie}>
                        <img 
                            className={styles.movie__image}
                            src="https://picsum.photos/300/400"
                            alt=""
                        />
                        <h3 className={styles.movie__title}>Avatar 2</h3>
                        <p className={styles.movie__date}>15 Desember 2022</p>
                    </div>
                    <div className={styles.movie}>
                        <img 
                            className={styles.movie__image}
                            src="https://picsum.photos/300/400"
                            alt=""
                        />
                        <h3 className={styles.movie__title}>The Flash</h3>
                        <p className={styles.movie__date}>4 November 2022</p>
                    </div>
                    <div className={styles.movie}>
                        <img 
                            className={styles.movie__image}
                            src="https://picsum.photos/300/400"
                            alt=""
                        />
                        <h3 className={styles.movie__title}>The Matrix Resurrections</h3>
                        <p className={styles.movie__date}>22 Desember 2021</p>
                    </div>
                    <div className={styles.movie}>
                        <img 
                            className={styles.movie__image}
                            src="https://picsum.photos/300/400"
                            alt=""
                        />
                        <h3 className={styles.movie__title}>Thor: Love and Thunder</h3>
                        <p className={styles.movie__date}>6 Mei 2022</p>
                    </div>
                    <div className={styles.movie}>
                        <img 
                            className={styles.movie__image}
                            src="https://picsum.photos/300/400"
                            alt=""
                        />
                        <h3 className={styles.movie__title}>Mission: Impossible 7</h3>
                        <p className={styles.movie__date}>27 Mei 2022</p>
                    </div>
                </div>
            </section>
        </div>
    );
}

 export default Movies;
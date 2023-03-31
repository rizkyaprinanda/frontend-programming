import styles from "./Hero.module.css"

function Hero() {
    return (
        <div className={styles.container}>
            <section className={styles.hero}>
                <div className={styles.hero__left}>
                    <h2 className={styles.hero__title}>Spiderman</h2>
                    <h3 className={styles.hero__genre}>
                        Genre: Action, Drama, Romance
                    </h3>
                    <p className={styles.hero__description}>
                        Pertama kalinya dalam sejarah layar lebar Spider-Man, 
                        identitas asli dari pahlawan nan ramah ini terbongkar, 
                        sehingga membuat tanggung jawabnya sebagai seorang berkekuatan super berbenturan dengan kehidupan normalnya, 
                        dan menempatkan semua orang terdekatnya dalam posisi paling terancam.
                    </p>
                    <button className={styles.hero__button}>Watch</button>
                </div>
                <div className={styles.hero__right}>
                    <img
                    className={styles.hero__images}
                    src="https://picsum.photos/536/354"
                    alt="placeholder"
                    />
                </div>
            </section>
        </div>
    );
}

export default Hero;
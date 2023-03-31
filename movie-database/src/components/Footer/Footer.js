import styles from "./Footer.module.css"

function Footer() {
    /**
     * Menggunakan Style yang sudah diimport
     * Memanggilnya menggunakan expression
     */

    return (
        <div className={styles.container}>
            <footer className={styles.footer}>
                <h2 className={styles.footer__title}>Movie App</h2>
                <p className={styles.footer__author}>Created by Rizky Aprinanda</p>
            </footer>
        </div>
    );
}

export default Footer;
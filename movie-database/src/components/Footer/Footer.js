import StyledFooter from "./Footer.styled";

function Footer() {
    /**
     * Menggunakan Style yang sudah diimport
     * Memanggilnya menggunakan expression
     */

    return (
        <StyledFooter>
            <footer>
                <h2>Movie App</h2>
                <p>Created by Rizky Aprinanda</p>
            </footer>
        </StyledFooter>
    );
}

export default Footer;
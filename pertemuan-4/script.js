console.log("Mulai React");

/**
 * Membuat component Hello
 */


function Hello(props) {
    console.log(props);
    
    // Melakukan destructing props 
    const {name} = props;
    // di dalam return adalah JSX
    return(
        <div className="hello">
            <h2>Hello React</h2>
            <p>Saya {name} - Frontend Engineer</p>          
        </div>
    );    
}

/**
 * Membuat Componenet Header.
 * Menampilkan Navigasi
 */

function Header(){
    return(
        <nav>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    );
}

/**
 * Membuat component Main
 * Menampung Konten Utama
 */

function Main() {
    // Mengirim props nama ke component Hello
    return(
        <main>
            <Hello name="Rizky" />
            <Hello name="Jonas" />
            <Hello name="Hannah" />
            <Hello name="Mikel" />
            <Hello name="Martha" />
        </main>
    );   
}

function Footer(){
    return(
        <footer>
            <h2>Copyright RizkyAprinanda</h2>
            <p>Dibuat menggunakan ReactJS</p>
        </footer>
    );
}

function App(){
    return(
        <div>
            <Header />
            <Main />
            <Footer />
        </div>
    );
}
/**
 * Membuat component footer
 * Menampilkan footer di web
 */

/**
 * Mencetak Component Hello ke div root
 */

ReactDOM.render(<App />, document.getElementById("root"));
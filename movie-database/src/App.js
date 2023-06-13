// Import Halaman Home
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import TopRatedMovie from "./pages/movie/TopRated";
import NowPlayingMovie from "./pages/movie/NowPlaying";
import CreateMovie from "./pages/movie/create";
import Layout from "./Layout";
// Import Theme Provider
import { ThemeProvider } from "styled-components";
import theme from "./utils/constant/theme";
import GlobalStyle from "./components/GlobalStyle";
import PopularMovie from "./pages/movie/Popular";
import Detail from "./pages/movie/Detail";


function App() {
    /**
     * Menampilkan Halaman Home 
     * Tag div bisa diganti dengan tag <>
     * Tag <> adalah React Fragment
     */
    return (
        <>
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/movie/create" element={<CreateMovie />} />                
                    <Route path="/movie/popular" element={<PopularMovie />} />
                    <Route path="/movie/now" element={<NowPlayingMovie />} />
                    <Route path="/movie/top" element={<TopRatedMovie />} />
                    <Route path="/movie/:id" element={<Detail />} />
                    <Route path="*" element={<h2>Halaman 404</h2>} />
                    
                </Routes>
            </Layout>
        </ThemeProvider>
        </>
    );
}

export default App;

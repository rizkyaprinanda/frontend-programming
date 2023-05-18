// Import Halaman Home
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import TopRatedMovie from "./pages/movie/TopRated";
import NowPlayingMovie from "./pages/movie/NowPlaying";
import CreateMovie from "./pages/movie/create";
import Layout from "./Layout";

function App() {
    /**
     * Menampilkan Halaman Home 
     * Tag div bisa diganti dengan tag <>
     * Tag <> adalah React Fragment
     */
    return (
        <>
        <Layout>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/movie/create" element={<CreateMovie />} />                
                <Route path="/movie/popular" element={<TopRatedMovie />} />
                <Route path="/movie/now" element={<NowPlayingMovie />} />
                <Route path="/movie/top" element={<TopRatedMovie />} />
            </Routes>
        </Layout>
        </>
    );
}

export default App;

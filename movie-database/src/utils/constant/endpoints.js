// import { useParams } from "react-router-dom";

// const params = useParams();

// membuat variable API_KEY
const API_KEY = process.env.REACT_APP_API_KEY;

// membuat variable URL API: BASE_URL untuk menampung URL API nya
// IMG_URL untuk menampung URL yang bersifat gambar
// VIDEO_URL untuk menampung URL yang bersifat Video

const BASE_URL = "https://api.themoviedb.org/3";
const IMG_URL = "https://image.tmdb.org/t/p";
const VIDEO_URL = "https://www.youtube.com/watch?v"

const ENDPOINTS = {
  
    POPULAR: `${BASE_URL}/movie/popular?api_key=${API_KEY}`,    
    NOW: `${BASE_URL}/movie/now_playing?api_key=${API_KEY}`,
    TOP: `${BASE_URL}/movie/top_rated?api_key=${API_KEY}`,
    HERO: `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`,
    DETAIL: function(movieId){
        return `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&append_to_response=videos`;
    },
    RECOMEND: function(movieId){
     return `${BASE_URL}/movie/${movieId}/recommendations?api_key=${API_KEY}`;   
    },
    BACKDROP: function(movie){
        return `${IMG_URL}/w500/${movie.backdrop_path}`
    },
    POSTER: function(movie){
        return `${IMG_URL}/w300/${movie.poster_path}`
    },
    VIDEO: function(movie){
        return `${VIDEO_URL}=${movie.videos.results[0].key}`
    }
  
}



export default ENDPOINTS;

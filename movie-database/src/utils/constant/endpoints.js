// import { useParams } from "react-router-dom";

// const params = useParams();

// membuat variable API_KEY
const API_KEY = process.env.REACT_APP_API_KEY;

// membuat variable URL API: BASE_URL
// endpoint.js

const BASE_URL = "https://api.themoviedb.org/3";

const ENDPOINTS = {
  
    POPULAR: `${BASE_URL}/movie/popular?api_key=${API_KEY}`,    
    NOW: `${BASE_URL}/movie/now_playing?api_key=${API_KEY}`,
    TOP: `${BASE_URL}/movie/top_rated?api_key=${API_KEY}`,
    DETAIL: function(movieId){
        return `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&append_to_response=videos`;
    },
    RECOMEND: function(movieId){
     return `${BASE_URL}/movie/${movieId}/recommendations?api_key=${API_KEY}`;   
    }

  
}



export default ENDPOINTS;

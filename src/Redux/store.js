import { configureStore } from "@reduxjs/toolkit";
import movies from './movies/movieSlice'
const store = configureStore({
    reducer:{
        movies
    }
})

export default store; 
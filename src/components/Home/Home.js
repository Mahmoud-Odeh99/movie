import React,{useEffect} from 'react';
import MovieListing from '../MovieListing/MovieListing';
import { useDispatch,useSelector } from 'react-redux';
import { getAsyncMovies,getAsyncShows } from '../../Redux/movies/movieSlice';
const Home = () => {
    const {movies} = useSelector(state => state.movies)
    const {shows} = useSelector(state => state.movies)
    const {isLoading} = useSelector(state => state.movies)
    const dispatch = useDispatch();

    const moviesSearch = "Harry";
    const showsSearch = "Friends";
    useEffect(() => {
        dispatch(getAsyncMovies(moviesSearch))
        dispatch(getAsyncShows(showsSearch))
    },[dispatch])
    return (
        <>
            <div className="banner-image"></div>
            <MovieListing movies={movies} shows={shows} isLoading={isLoading}/>
        </>
    );
};

export default Home;
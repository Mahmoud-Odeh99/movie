import React from 'react';
import MovieCard from '../MovieCard/MovieCard'
import Slider from "react-slick";
import { settings } from '../../common/settingSlider';
import "./MovieListing.scss"
const MovieListing = ({movies,shows,isLoading}) => {

    const renderMovies = movies.Response === "True" ? (
        movies.Search.map((movie,index) => (
            <MovieCard key={index} data={movie} />
        ))
    ) : (<div className="movies-error"><h3>{movies.Error}</h3></div>);

    const renderShows = shows.Response === "True" ? (
        shows.Search.map((show,index) => (
            <MovieCard key={index} data={show} />
        ))
    ) : (<div className="movies-error"><h3>{shows.Error}</h3></div>);




    return (
        <div className="movie-wrapper">
           <div className="movie-list">
               <h2>Movies</h2>
               {
                isLoading === true  ? (<div className="lazy-loading">... Loading</div>) : (<div className="movie-container"><Slider {...settings}>{renderMovies}</Slider></div>)
               }
               
           </div>

           <div className="show-list">
               <h2>Shows</h2>
               {
                isLoading === true  ? (<div className="lazy-loading">... Loading</div>) : (<div className="movie-container"><Slider {...settings}>{renderShows}</Slider></div>)
               }
           </div>
        </div>
    );
};

export default MovieListing;
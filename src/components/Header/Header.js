import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getAsyncMovies,getAsyncShows } from '../../Redux/movies/movieSlice';
import   "./Header.scss";

const Header = () => {
    const dispatch = useDispatch();
    const [term,setTerm] = useState("");

    const searchHandler =(e)=>{
        e.preventDefault();
        if(term === "") return alert("Please enter search term!");
        dispatch(getAsyncMovies(term))
        dispatch(getAsyncShows(term))
        setTerm("")
    }
    return (
        <div className="header">
            <div className="logo"><Link to="/">Movie App</Link></div>
            <div className="search-bar">
                <form onSubmit={searchHandler}>
                    <input type="text" className="" value={term} placeholder="Search Movies pr Shows" onChange={(e)=>{setTerm(e.target.value)}}/>
                    <button type="submit" ><i className='fa fa-search'></i></button>
                </form>
            </div>
            <div className="user-image">
                <img src={"https://raw.githubusercontent.com/dmalvia/React_Redux_ToolKit_Movie_App/master/src/images/user.png"} alt="user" />
            </div>
        </div>
    );
};

export default Header;
import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { apiKey } from "../../common/api/movieAPI";

// get all movies
export const getAsyncMovies = createAsyncThunk('movies/getMovies',async (term,thunkAPI)=>{
      
    const {rejectWithValue} = thunkAPI;
    try {
        const res = await fetch(`https://www.omdbapi.com?apiKey=${apiKey}&s=${term}&type=movie`);
        const data = await res.json();
        return data; 
    } catch (error) {
        return rejectWithValue(error.message);
    }

})
// get all shows  
export const getAsyncShows = createAsyncThunk('movies/getShows',async (term,thunkAPI)=>{
    const {rejectWithValue} = thunkAPI;
    try {
        const res = await fetch(`https://www.omdbapi.com?apiKey=${apiKey}&s=${term}&type=series`);
        const data = await res.json();
        return data; 
    } catch (error) {
        return rejectWithValue(error.message);
    }

})

// get all shows  
export const getMoviesOrShowsDetails = createAsyncThunk('movies/getMoviesOrShowsDetails',async (id,thunkAPI)=>{
    const {rejectWithValue} = thunkAPI;
    try {
        const res = await fetch(`https://www.omdbapi.com?apiKey=${apiKey}&i=${id}&Plot=full`);
        const data = await res.json();
        return data; 
    } catch (error) {
        return rejectWithValue(error.message);
    }

})

const movieSlice = createSlice({
    name: 'movies',
    initialState:{movies:{},shows:{},selectedMovieOrShow:{},isLoading:false },
    reducers:{
        addMovies : (state,action)=>{
            state.movies = action.payload;
        },
        removeSelectetMoviesOrShowsDetails:(state,action)=>{
            state.selectedMovieOrShow = {};
        }
    },
    extraReducers:{
        // movies reducers : 
        [getAsyncMovies.pending]:(state,action)=>{
            console.log("pending to get movies");
            state.isLoading = true
        },
        [getAsyncMovies.fulfilled]:(state,action)=>{
            state.movies = action.payload;
            state.isLoading = false
        },
        [getAsyncMovies.rejected]:(state,action)=>{
            console.log(action);

        },

        // shows reducers : 
        [getAsyncShows.pending]:(state,action)=>{
            console.log(action);
            state.isLoading = true
        },
        [getAsyncShows.fulfilled]:(state,action)=>{
            state.shows = action.payload;
            state.isLoading = false
        },
        [getAsyncShows.rejected]:(state,action)=>{
            console.log(action);

        },

        // details reducers : 
        [getMoviesOrShowsDetails.pending]:(state,action)=>{
            console.log(action);
        },
        [getMoviesOrShowsDetails.fulfilled]:(state,action)=>{
            state.selectedMovieOrShow = action.payload;
        },
        [getMoviesOrShowsDetails.rejected]:(state,action)=>{
            console.log(action);

        },
    }
})

export const {addMovies,removeSelectetMoviesOrShowsDetails} = movieSlice.actions;
export const getAllMovies = (state)=> state.movies.movies;
export default movieSlice.reducer;
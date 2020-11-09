import {combineReducers} from 'redux';
import fetchDataReducer from './fetchDataReducer';
import fetchGenreReducer from './fetchGenreReducer'

export default combineReducers({
    popularMovieData: fetchDataReducer,
    genreData: fetchGenreReducer
})
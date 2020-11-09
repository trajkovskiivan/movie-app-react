import tmbdJson, { } from '../apis/tmbdJson'
import config from '../apis/config';
import actions from './actions';



export const fetchPopulardata = () => async (dispatch) => {
    const response = await tmbdJson.get(`/movie/popular?api_key=d85a1d59e33a1d6d4cd8f55b545737f9&language=en-US&page=1`);
    // const response = await tmbdJson.get(`/movie/popular?api_key=${config.apiKey}&language=en-US&page=1`);
    dispatch({type: actions.FETCH_DATA, payload: response.data})
}

export const fetchMovieGenres = () => async (dispatch) => {
    const response = await tmbdJson.get(`movie/list?api_key=d85a1d59e33a1d6d4cd8f55b545737f9&language=en-US`)
    dispatch({type: actions.FETCH_MOVIES, payload: response.data})
}
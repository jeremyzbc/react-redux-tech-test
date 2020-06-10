import {
  SEARCH_MOVIES_PENDING,
  SEARCH_MOVIES_SUCCESS,
  SEARCH_MOVIES_ERROR,
  GET_MOVIE_DETAILS_PENDING,
  GET_MOVIE_DETAILS_SUCCESS,
  GET_MOVIE_DETAILS_ERROR,
  SET_PAGE_NUM,
  SET_SEARCH_STRING,
  SET_SELECTED_MOVIE,
  CLOSE_SPLIT_VIEW,
  ITEM_PER_PAGE
} from '../constants';

export const endpointBuilder = (url, params) => {
  if (!Array.isArray(params)) return endpointBuilder(url, [params]);
  return params.reduce(
    (newUrl, param) => newUrl.replace(/{[a-zA-Z_]+}/, param),
    url
  );
};

async function fetchMovieList(dispatch, getState, endpoints) {
  const { search, pageNum } = getState().movie;
  endpoints = endpointBuilder(endpoints.LIST, [search, pageNum]);
  dispatch({ type: SEARCH_MOVIES_PENDING });
  try {
    const response = await fetch(endpoints, { method: 'GET' });
    const { Response, Search, totalResults, Error } = await response.json();
    if (Response === 'True')
      dispatch({
        type: SEARCH_MOVIES_SUCCESS,
        searchResult: Search,
        total: Number(totalResults)
      });
    else dispatch({ type: SEARCH_MOVIES_ERROR, error: Error });
  } catch (error) {
    dispatch({ type: SEARCH_MOVIES_ERROR, error: 'Movie not found!' });
  }
}

async function getMovieDetails(dispatch, getState, endpoints) {
  const { selectedMovieId } = getState().movie;
  endpoints = endpointBuilder(endpoints.DETAILS, selectedMovieId);
  dispatch({ type: GET_MOVIE_DETAILS_PENDING });
  try {
    const response = await fetch(endpoints, { method: 'GET' });
    const details = await response.json();
    dispatch({ type: GET_MOVIE_DETAILS_SUCCESS, details });
  } catch (error) {
    dispatch({
      type: GET_MOVIE_DETAILS_ERROR,
      error: 'something went wrong! Please try again!'
    });
  }
}

export function searchMoviesAction(search) {
  return async (dispatch, getState, endpoints) => {
    dispatch({ type: SET_SEARCH_STRING, search });
    await fetchMovieList(dispatch, getState, endpoints);
  };
}

export function setPageNumAction(pageNum) {
  return async (dispatch, getState, endpoints) => {
    const maxPageNum = Math.round(getState().movie.total / ITEM_PER_PAGE);
    if (pageNum > 0 && pageNum <= maxPageNum) {
      dispatch({ type: SET_PAGE_NUM, pageNum });
      await fetchMovieList(dispatch, getState, endpoints);
    }
  };
}

export function setSelectedMovieAction(movieId) {
  return async (dispatch, getState, endpoints) => {
    dispatch({ type: SET_SELECTED_MOVIE, selectedMovieId: movieId });
    await getMovieDetails(dispatch, getState, endpoints);
  };
}

export function closeSplitViewAction() {
  return { type: CLOSE_SPLIT_VIEW };
}

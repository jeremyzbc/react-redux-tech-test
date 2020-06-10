const API_KEY = '9ef29056';
export const API_ENDPOINTS = {
  LIST: `http://www.omdbapi.com/?apikey=${API_KEY}&s={search}&page={page}`,
  DETAILS: `http://www.omdbapi.com/?apikey=${API_KEY}&i={id}&plot=full`
};
export const ITEM_PER_PAGE = 10;
export const SEARCH_MOVIES_PENDING = 'SEARCH_MOVIES_PENDING';
export const SEARCH_MOVIES_SUCCESS = 'SEARCH_MOVIES_SUCCESS';
export const SEARCH_MOVIES_ERROR = 'SEARCH_MOVIES_ERROR';
export const GET_MOVIE_DETAILS_PENDING = 'GET_MOVIE_DETAILS_PENDING';
export const GET_MOVIE_DETAILS_SUCCESS = 'GET_MOVIE_DETAILS_SUCCESS';
export const GET_MOVIE_DETAILS_ERROR = 'GET_MOVIE_DETAILS_ERROR';
export const SET_PAGE_NUM = 'SET_PAGE_NUM';
export const SET_SEARCH_STRING = 'SET_SEARCH_STRING';
export const SET_SELECTED_MOVIE = 'SET_SELECTED_MOVIE';
export const CLOSE_SPLIT_VIEW = 'CLOSE_SPLIT_VIEW';

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
  CLOSE_SPLIT_VIEW
} from '../constants';

export default function movie(state = { pageNum: 1 }, action) {
  switch (action.type) {
    case SEARCH_MOVIES_PENDING: {
      return {
        ...state,
        listLoading: true,
        listError: null
      };
    }
    case SEARCH_MOVIES_SUCCESS: {
      return {
        ...state,
        listLoading: false,
        movies: action.searchResult,
        total: action.total
      };
    }
    case SEARCH_MOVIES_ERROR: {
      return {
        ...state,
        listLoading: false,
        movies: [],
        total: 0,
        listError: action.error
      };
    }
    case GET_MOVIE_DETAILS_PENDING: {
      return {
        ...state,
        showSplitView: true,
        detailsLoading: true,
        detailsError: null
      };
    }
    case GET_MOVIE_DETAILS_SUCCESS: {
      return {
        ...state,
        detailsLoading: false,
        selectedMovieDetails: action.details
      };
    }
    case GET_MOVIE_DETAILS_ERROR: {
      return {
        ...state,
        detailsLoading: false,
        detailsError: action.error
      };
    }
    case SET_PAGE_NUM: {
      return {
        ...state,
        pageNum: action.pageNum
      };
    }
    case SET_SEARCH_STRING: {
      return {
        ...state,
        search: action.search
      };
    }
    case SET_SELECTED_MOVIE: {
      return {
        ...state,
        selectedMovieId: action.selectedMovieId
      };
    }
    case CLOSE_SPLIT_VIEW: {
      return {
        ...state,
        showSplitView: false
      };
    }
    default:
      return state;
  }
}

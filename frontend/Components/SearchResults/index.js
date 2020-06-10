import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Movie from './Movie';
import Pagination from './Pagination';
import { setPageNumAction, setSelectedMovieAction } from '../../actions';
import { ITEM_PER_PAGE } from '../../constants';

const renderMovieList = (movies, selectedMovieId, total, pageNum, selectMovie, setPageNum) => (
  <>
    {movies && (
      <ul className="movie-list">
        {movies.map(movie => (
          <li key={movie.imdbID} onClick={() => selectMovie(movie.imdbID)}>
            <Movie
              movie={movie}
              isSelected={movie.imdbID === selectedMovieId}
            />
          </li>
        ))}
      </ul>
    )}
    {total > ITEM_PER_PAGE && (
      <Pagination
        pageNum={pageNum}
        onPrevClick={() => setPageNum(pageNum - 1)}
        onNextClick={() => setPageNum(pageNum + 1)}
      />
    )}
    {!!total && <div className="text-center">{total} results</div>}
  </>
);

export const SearchResults = ({
  movies,
  total,
  listLoading,
  listError,
  pageNum,
  setPageNum,
  selectedMovieId,
  selectMovie
}) => {
  if (listLoading) return <p>Loading...</p>;
  if (listError) return <p>{listError}</p>;
  return renderMovieList(movies, selectedMovieId, total, pageNum, selectMovie, setPageNum);
};

SearchResults.propTypes = {
  movies: PropTypes.array,
  total: PropTypes.number,
  listLoading: PropTypes.bool,
  listError: PropTypes.string,
  pageNum: PropTypes.number,
  setPageNum: PropTypes.func,
  selectedMovieId: PropTypes.string,
  selectMovie: PropTypes.func
};

export default connect(
  state => ({
    movies: state.movie.movies,
    total: state.movie.total,
    pageNum: state.movie.pageNum,
    selectedMovieId: state.movie.selectedMovieId,
    listLoading: state.movie.listLoading,
    listError: state.movie.listError
  }),
  dispatch => ({
    setPageNum: pageNum => dispatch(setPageNumAction(pageNum)),
    selectMovie: movieId => dispatch(setSelectedMovieAction(movieId))
  })
)(SearchResults);

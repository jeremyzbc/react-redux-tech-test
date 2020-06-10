import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { searchMoviesAction } from '../../actions';

let timer;
export const DELAY = 300;
const onSearch = (e, searchMovies) => {
  if (timer) clearTimeout(timer);
  const text = e.target.value;
  timer = setTimeout(() => {
    searchMovies(text);
  }, DELAY);
};

export const SearchBox = ({ searchMovies }) => (
  <input
    className="input input-block input-round"
    placeholder="Search movies"
    onChange={e => onSearch(e, searchMovies)}
  />
);

SearchBox.propTypes = {
  searchMovies: PropTypes.func
};

export default connect(
  null,
  dispatch => ({ searchMovies: text => dispatch(searchMoviesAction(text)) })
)(SearchBox);

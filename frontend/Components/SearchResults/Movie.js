import React from 'react';
import PropTypes from 'prop-types';

const Movie = ({ movie, isSelected }) => (
  <div className="movie">
    <p className="movie-left">{movie.Title}</p>
    <div className="movie-right">
      <div
        className="star"
        style={{ visibility: isSelected ? 'visible' : 'hidden' }}
      />
      <div className="movie-right-bottom">{movie.Year}</div>
    </div>
  </div>
);

Movie.propTypes = {
  movie: PropTypes.object,
  isSelected: PropTypes.bool
};

export default Movie;

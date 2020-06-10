import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const mapPropsToView = ({ movieDetails, detailsLoading, detailsError }) => {
  if (detailsError) return <h4>{detailsError}</h4>;
  if (detailsLoading) return <h4>Loading...</h4>;
  if (movieDetails) {
    return (
      <div className="movie-details">
        <div className="movie-details-left">
          <h4 className="movie-details-title">{movieDetails.Title}</h4>
          <p className="movie-details-genre text-sm">{movieDetails.Genre}</p>
          <p className="movie-details-plot">{movieDetails.Plot}</p>
          <div className="movie-details-meta">
            <p>
              <strong>Language: </strong>
              <span className="movie-details-language">
                {movieDetails.Language}
              </span>
            </p>
            <p>
              <strong>Director: </strong>
              <span className="movie-details-director">
                {movieDetails.Director}
              </span>
            </p>
            <p>
              <strong>Actors: </strong>
              <span className="movie-details-actors">
                {movieDetails.Actors}
              </span>
            </p>
            <p>
              <strong>Duration: </strong>
              <span className="movie-details-runtime">
                {movieDetails.Runtime}
              </span>
            </p>
          </div>
        </div>
        <div className="movie-details-right">
          {movieDetails.Poster !== 'N/A' && <img src={movieDetails.Poster} />}
        </div>
      </div>
    );
  }
  return null;
};

export const MovieDetails = props => mapPropsToView(props);

MovieDetails.propTypes = {
  detailsLoading: PropTypes.bool,
  detailsError: PropTypes.string,
  movieDetails: PropTypes.object
};

MovieDetails.defaultProps = {
  movieDetails: {}
};

export default connect(state => ({
  movieDetails: state.movie.selectedMovieDetails,
  detailsLoading: state.movie.detailsLoading,
  detailsError: state.movie.detailsError
}))(MovieDetails);

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SearchBox from './SearchBox';
import SearchResults from './SearchResults';
import MovieDetails from './MovieDetails';
import { closeSplitViewAction } from '../actions';

const App = ({ isSplitView, closeSplitView }) => {
  const cls = isSplitView ? 'container split' : 'container';
  return (
    <div className={cls}>
      <aside className="aside">
        <SearchBox />
        <SearchResults />
      </aside>
      <main className="main">
        <MovieDetails />
        <div className="main-close" onClick={closeSplitView}>
          X
        </div>
      </main>
    </div>
  );
};

App.propTypes = {
  isSplitView: PropTypes.bool,
  closeSplitView: PropTypes.func
};

export default connect(
  state => ({
    isSplitView: state.movie.showSplitView
  }),
  dispatch => ({ closeSplitView: () => dispatch(closeSplitViewAction()) })
)(App);

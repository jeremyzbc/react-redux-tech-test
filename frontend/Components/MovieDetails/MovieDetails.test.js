import React from 'react';
import { shallow } from 'enzyme';
import { MovieDetails } from './index';
import { ITEM_PER_PAGE } from '../../constants';

describe('MovieDetails', () => {
  let wrapper;

  function setup(
    props,
    defaultProps = {
      movieDetails: {},
      detailsLoading: false,
      detailsError: null
    }
  ) {
    props = { ...defaultProps, ...props };
    wrapper = shallow(<MovieDetails {...props} />);
  }

  it('should render Loading when detailsLoading is true', () => {
    setup({ detailsLoading: true });
    expect(wrapper.find('h4').text()).toEqual('Loading...');
  });

  it('should render error when detailsError is defined', () => {
    setup({ detailsError: 'some error' });
    expect(wrapper.find('h4').text()).toEqual('some error');
  });

  it('should render movie details when movieDetails is defined', () => {
    setup({
      movieDetails: {
        Title: 'title',
        Genre: 'genre',
        Plot: 'plot',
        Language: 'language',
        Director: 'director',
        Actors: 'actors',
        Runtime: 'runtime',
        Poster: 'http://poster-url'
      }
    });
    expect(wrapper.find('.movie-details-title').text()).toEqual('title');
    expect(wrapper.find('.movie-details-genre').text()).toEqual('genre');
    expect(wrapper.find('.movie-details-plot').text()).toEqual('plot');
    expect(wrapper.find('.movie-details-language').text()).toEqual('language');
    expect(wrapper.find('.movie-details-director').text()).toEqual('director');
    expect(wrapper.find('.movie-details-actors').text()).toEqual('actors');
    expect(wrapper.find('.movie-details-runtime').text()).toEqual('runtime');
    expect(wrapper.find('img').get(0).props.src).toEqual('http://poster-url');
  });

  it('should not render movie poster when poster url equal to `N/A`', () => {
    setup({
      movieDetails: {
        Poster: 'N/A'
      }
    });
    expect(wrapper.find('img').length).toEqual(0);
  });
});

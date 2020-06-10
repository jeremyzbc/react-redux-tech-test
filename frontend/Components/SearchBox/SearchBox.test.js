import React from 'react';
import { shallow } from 'enzyme';
import { SearchBox, DELAY } from './index';

describe('SearchBox', () => {
  let wrapper;
  let searchMoviesSpy;

  function setup() {
    const props = {
      searchMovies: jest.fn()
    };
    searchMoviesSpy = jest.spyOn(props, 'searchMovies');
    wrapper = shallow(<SearchBox searchMovies={searchMoviesSpy} />);
  }

  it('should render an input', () => {
    setup();
    expect(wrapper.find('input').length).toEqual(1);
  });

  it('should call `searchMovies` function when input change', done => {
    setup();
    const input = wrapper.find('input').at(0);
    input.simulate('change', { target: { value: 'search string' } });
    setTimeout(() => {
      expect(searchMoviesSpy).toHaveBeenCalledWith('search string');
      done();
    }, DELAY);
  });
});

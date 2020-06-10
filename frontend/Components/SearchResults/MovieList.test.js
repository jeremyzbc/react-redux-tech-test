import React from 'react';
import { shallow } from 'enzyme';
import { SearchResults } from './index';
import Movie from './Movie';
import Pagination from './Pagination';
import { ITEM_PER_PAGE } from '../../constants';

describe('SearchResults', () => {
  let wrapper;

  function setup(
    props,
    defaultProps = {
      movies: [],
      total: 0,
      listLoading: false,
      listError: null,
      pageNum: 1,
      setPageNum: jest.fn(),
      selectedMovieId: undefined,
      selectMovie: jest.fn()
    }
  ) {
    props = { ...defaultProps, ...props };
    wrapper = shallow(<SearchResults {...props} />);
  }

  it('should render Loading when listLoading is true', () => {
    setup({ listLoading: true });
    expect(wrapper.find('p').text()).toEqual('Loading...');
  });

  it('should render error when listError is defined', () => {
    setup({ listError: 'some error' });
    expect(wrapper.find('p').text()).toEqual('some error');
  });

  it('should render movie list when movies is not empty array', () => {
    setup({ movies: [{}, {}] });
    expect(wrapper.find(Movie).length).toEqual(2);
  });

  it('should render Pagination when the total number of movies is greater than the page size', () => {
    setup({ total: ITEM_PER_PAGE + 1 });
    expect(wrapper.find(Pagination).length).toEqual(1);
  });

  it('should not render Pagination when the total number of movies is less than the page size', () => {
    setup({ total: 1 });
    expect(wrapper.find(Pagination).length).toEqual(0);
  });
});

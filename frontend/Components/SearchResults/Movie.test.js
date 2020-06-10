import React from 'react';
import { shallow } from 'enzyme';
import Movie from './Movie';

describe('Movie', () => {
  let wrapper;

  function setup(
    props,
    defaultProps = {
      movie: {
        Title: 'title',
        Year: '2020'
      },
      isSelected: false
    }
  ) {
    props = { ...defaultProps, ...props };
    wrapper = shallow(<Movie {...props} />);
  }

  it('should render title and year', () => {
    setup();
    expect(wrapper.find('.movie-left').text()).toEqual('title');
    expect(wrapper.find('.movie-right-bottom').text()).toEqual('2020');
  });

  it('should render/hide `star` when isSelected equal to true/false', () => {
    setup({ isSelected: true });
    expect(wrapper.find('.star').get(0).props.style).toHaveProperty(
      'visibility',
      'visible'
    );
    setup({ isSelected: false });
    expect(wrapper.find('.star').get(0).props.style).toHaveProperty(
      'visibility',
      'hidden'
    );
  });
});

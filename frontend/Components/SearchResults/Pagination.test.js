import React from 'react';
import { shallow } from 'enzyme';
import Pagination from './Pagination';

describe('Pagination', () => {
  let wrapper;
  let prevClickSpy;
  let nextClickSpy;

  function setup(
    props,
    defaultProps = {
      pageNum: 2,
      onPrevClick: jest.fn(),
      onNextClick: jest.fn()
    }
  ) {
    props = { ...defaultProps, ...props };
    prevClickSpy = jest.spyOn(props, 'onPrevClick');
    nextClickSpy = jest.spyOn(props, 'onNextClick');
    wrapper = shallow(<Pagination {...props} />);
  }

  it('should render correct page number', () => {
    setup();
    expect(wrapper.find('.page-num').text()).toEqual('Page 2');
  });

  it('should call onPrevClick/onNextClick function when prev/next is clicked', () => {
    setup();
    const prev = wrapper.find('.prev').at(0);
    const next = wrapper.find('.next').at(0);
    prev.simulate('click');
    next.simulate('click');
    expect(prevClickSpy).toHaveBeenCalled();
    expect(nextClickSpy).toHaveBeenCalled();
  });
});

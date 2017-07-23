import React from 'react';
import { shallow } from 'enzyme';

import StarFill from './StarFill';

it('StarFill renders without crashing', () => {
  shallow(<StarFill rating={5} />);
});

describe('StarFill', () => {
  const ratings = [
    {rating: 1}, {rating: 2}, {rating: 3}, {rating: 4}, {rating: 5},
  ];

  ratings.forEach(rating => {
    it(`for rating: ${rating.rating}`, () => {
      const wrapper = shallow(<StarFill {...rating} />);
      expect(wrapper.debug()).toMatchSnapshot();
    });
  });

  it('has floating class', () => {
    const wrapper = shallow(<StarFill rating={5} floating />);
    expect(wrapper.debug()).toMatchSnapshot();
  });
});

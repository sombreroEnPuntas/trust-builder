import React from 'react';
import { shallow } from 'enzyme';

import Star from './Star';

it('Star renders without crashing', () => {
  shallow(<Star index={1} rating={5} />);
});

describe('Star gets proper class name and structure for:', () => {
  const stars = [
    {index: 1, rating: 1}, {index: 2, rating: 1}, {index: 3, rating: 1}, {index: 4, rating: 1}, {index: 5, rating: 1},
    {index: 1, rating: 2}, {index: 2, rating: 2}, {index: 3, rating: 2}, {index: 4, rating: 2}, {index: 5, rating: 2},
    {index: 1, rating: 3}, {index: 2, rating: 3}, {index: 3, rating: 3}, {index: 4, rating: 3}, {index: 5, rating: 3},
    {index: 1, rating: 4}, {index: 2, rating: 4}, {index: 3, rating: 4}, {index: 4, rating: 4}, {index: 5, rating: 4},
    {index: 1, rating: 5}, {index: 2, rating: 5}, {index: 3, rating: 5}, {index: 4, rating: 5}, {index: 5, rating: 5},
  ];

  stars.forEach(star => {
    it(`index ${star.index} / rating: ${star.rating}`, () => {
      const wrapper = shallow(<Star {...star} />);
      expect(wrapper.debug()).toMatchSnapshot();
    });
  });
});

describe('Star gets proper class name and structure for:', () => {
  const stars = [
    {index: 1, rating: 1, size: 'big', className: 'some-parent-class'},
  ];

  stars.forEach(star => {
    it(`index ${star.index} / rating: ${star.rating} / big!`, () => {
      const wrapper = shallow(<Star {...star} />);
      expect(wrapper.debug()).toMatchSnapshot();
    });
  });
});

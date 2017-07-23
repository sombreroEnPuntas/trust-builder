import React from 'react';
import { shallow } from 'enzyme';

import Star from './Star';

it('Star renders without crashing', () => {
  shallow(<Star index={1} rating={5} />);
});

describe('Star gets proper class name and structure for:', () => {
  const stars = [
    {index: 2, rating: 1}, // color-0
    {index: 1, rating: 1}, // color-1
    {index: 1, rating: 2}, // color-2
    {index: 1, rating: 3}, // color-3
    {index: 1, rating: 4}, // color-4
    {index: 1, rating: 5}, // color-5
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
    {index: 1, rating: 1, size: 'big'},
  ];

  stars.forEach(star => {
    it(`index ${star.index} / rating: ${star.rating} / big!`, () => {
      const wrapper = shallow(<Star {...star} />);
      expect(wrapper.debug()).toMatchSnapshot();
    });
  });
});

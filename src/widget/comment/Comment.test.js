import React from 'react';
import { shallow } from 'enzyme';

import reviews from '../../mocks/reviews';
import Comment from './Comment';

it('Comment renders without crashing', () => {
  shallow(<Comment review={reviews[0]} />);
});

describe('Comment renders mocks as expected for:', () => {
  reviews.forEach(review => {
    it(review.fullName, () => {
      const wrapper = shallow(<Comment review={review} />);
      expect(wrapper.debug()).toMatchSnapshot();
    });
  });
});

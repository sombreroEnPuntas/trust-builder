import React from 'react';
import { mount } from 'enzyme';

import reviews from '../mocks/reviews';
import Widget from './Widget';

it('Widget renders without crashing', () => {
  mount(<Widget totalCards={0} />);
});

describe('Widget renders mocks as expected for:', () => {
  it('Shows loading message...', () => {
    const wrapper = mount(<Widget totalCards={0} />);
    expect(wrapper.debug()).toMatchSnapshot();
  });

  it('Shows reviews!', () => {
    const wrapper = mount(<Widget reviews={reviews} totalCards={reviews.length} />);
    expect(wrapper.debug()).toMatchSnapshot();
  });
});

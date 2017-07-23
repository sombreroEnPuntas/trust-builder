import React from 'react';
import { mount } from 'enzyme';

import reviews from '../../mocks/reviews';
import Widget from '../Widget';
// import withSpinner from './withSpinner';

describe('Widget shows behavior for:', () => {
  const wrapper = mount(<Widget reviews={reviews} totalCards={reviews.length} />);

  it('Click back (below 0)...', () => {
    expect(wrapper.state('currentCard')).toEqual(0);
    wrapper.find('.button_type_back').simulate('click');
    expect(wrapper.state('currentCard')).toEqual(14);
  });

  it('Click next (above max)...', () => {
    expect(wrapper.state('currentCard')).toEqual(14);
    wrapper.find('.button_type_next').simulate('click');
    expect(wrapper.state('currentCard')).toEqual(0);
  });

  it('Click next...', () => {
    expect(wrapper.state('currentCard')).toEqual(0);
    wrapper.find('.button_type_next').simulate('click');
    expect(wrapper.state('currentCard')).toEqual(1);
  });

  it('Click back...', () => {
    expect(wrapper.state('currentCard')).toEqual(1);
    wrapper.find('.button_type_back').simulate('click');
    expect(wrapper.state('currentCard')).toEqual(0);
  });

});

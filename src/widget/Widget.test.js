import React from 'react';
import { shallow, mount } from 'enzyme';

import reviews from '../mocks/reviews';
import Widget from './Widget';

it('Widget renders without crashing', () => {
  shallow(<Widget />);
});

describe('Widget renders mocks as expected for:', () => {
  it('Shows loading message...', () => {
    const wrapper = shallow(<Widget />);
    expect(wrapper.debug()).toMatchSnapshot();
  });

  it('Shows reviews!', () => {
    const wrapper = mount(<Widget reviews={reviews} />);
    expect(wrapper.debug()).toMatchSnapshot();
  });
});

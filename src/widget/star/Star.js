import React from 'react';
import PropTypes from 'prop-types';

import './Star.scss';

const Star = ({ index, rating, size, className }) => (
  <span className={`Star ${className}`}>
    <span
      className={`star-block_color-${index <= rating ? rating : 0} star-block_size-${size}`}
    >
      🟊
    </span>
  </span>
);

Star.propTypes = {
  size: PropTypes.oneOf(['small', 'big']).isRequired,
  index: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  className: PropTypes.string,
};


Star.defaultProps = {
  size: 'small',
  className: '',
};

export default Star;

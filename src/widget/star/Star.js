import React from 'react';
import PropTypes from 'prop-types';

import './Star.scss';

const Star = ({ index, rating, size }) => (
  <span className="Star">
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
};


Star.defaultProps = {
  size: 'small',
};

export default Star;

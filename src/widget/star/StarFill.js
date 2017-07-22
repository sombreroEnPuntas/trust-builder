import React from 'react';
import PropTypes from 'prop-types';

import Star from './Star';
import './StarFill.scss';

const StarFill = ({ rating }) => {
  let line = [];
  for (let i =1;i <= 5; i++){
    line.push(<Star key={`star-color-${rating}-line-${i}`} index={i} rating={rating} />);
  }
  
  return <span className="StarFill">{line}</span>;
};

StarFill.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default StarFill;

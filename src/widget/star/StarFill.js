import React from 'react';
import PropTypes from 'prop-types';

import Star from './Star';
import './StarFill.scss';

const StarFill = ({ rating, floating }) => {
  let line = [];
  let star;
  for (let i =1;i <= 5; i++){
    star = <Star
      key={`star-color-${rating}-line-${i}`}
      index={i}
      rating={rating}
      size={floating ? 'big' : 'small'}
    />;
    
    line.push(floating ?
      <span
        key={`floating-${rating}-line-${i}`}
        className="positioning"
        >
          {star}
      </span> :
      star
    );
  }
  
  return <span className={`StarFill${floating ? '-floating' : ''}`}>{line}</span>;
};

StarFill.propTypes = {
  rating: PropTypes.number.isRequired,
  floating: PropTypes.bool,
};

StarFill.defaultProps = {
  floating: false,
};

export default StarFill;

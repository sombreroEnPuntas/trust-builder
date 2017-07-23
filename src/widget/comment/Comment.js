import React from 'react';
import PropTypes from 'prop-types';

import { StarFill } from '../star';
import './Comment.scss';

const Comment = ({
  className,
  review,
  size,
}) => (
  <div className={`Comment Comment_size-${size} ${className}`}>
    <div className="header">
      <span className="title">
        {review.fullName}
      </span>
      <span className="rating">
        <StarFill rating={parseInt(review.starRating, 10)} />
      </span>
      <div className="sub-title">
        <span>{review.location}</span>
      </div>
    </div>
    <div className="body">
      <p className="title">{review.reviewTitle}</p>
      <p>{review.reviewBody}</p>
    </div>
  </div>
);

Comment.propTypes = {
  className: PropTypes.string,
  review: PropTypes.shape({
    fullName: PropTypes.string,
    location: PropTypes.string,
    reviewBody: PropTypes.string,
    reviewTitle: PropTypes.string,
    starRating: PropTypes.string,
  }).isRequired,
  size: PropTypes.oneOf(['normal']), // TODO: Implement more? :) 
};

Comment.defaultProps = {
  className: '',
  size: 'normal',
};

export default Comment;

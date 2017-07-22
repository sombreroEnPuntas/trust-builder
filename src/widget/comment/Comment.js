import React from 'react';
import PropTypes from 'prop-types';

import { StarFill } from '../star';
import './Comment.scss';

const Comment = ({
  review,
}) => (
  <div className="Comment">
    <span className="title">
      {review.reviewTitle}
    </span>
    <span className="rating">
      <StarFill rating={parseInt(review.starRating, 10)} />
    </span>
    <div className="sub-title">
      <span>{`${review.fullName}${review.location ? ' - ' : ''}${review.location}`}</span>
    </div>
    <div className="body">
      <p>{review.reviewBody}</p>
    </div>
  </div>
);

Comment.propTypes = {
  review: PropTypes.shape({
    fullName: PropTypes.string,
    location: PropTypes.string,
    reviewBody: PropTypes.string,
    reviewTitle: PropTypes.string,
    starRating: PropTypes.string,
  }).isRequired,
};

Comment.defaultProps = {
};

export default Comment;

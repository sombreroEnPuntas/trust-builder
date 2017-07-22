import React from 'react';
import PropTypes from 'prop-types';

import './Comment.scss';

const starLine = rating => `${'★'.repeat(rating)}${'☆'.repeat(5 - rating)}`;

const Comment = ({
  review,
}) => (
  <div className="Comment">
    <div className="title">
      <span>{review.reviewTitle}</span>
      <span className="rating">{starLine(review.starRating)}</span>
    </div>
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

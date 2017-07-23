import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Comment from './comment';
import { Star } from './star';

import './Widget.scss';

const accumulateReviewRatings = (sum, review) => sum + parseInt(review.starRating, 10);
const averageReviewRating = reviews => reviews.reduce(accumulateReviewRatings, 0) / reviews.length;

// TODO clean up implementation! :D

class Widget extends Component {
  render() {
    const {
      reviews,
    } = this.props;

    if(reviews.length < 1) {
      return (<div>Loading reviews...</div>);
    }

    const logoSrc = `${process.env.PUBLIC_URL}/logo/255x29.png`;

    const starSettings = {
      rating: averageReviewRating(reviews),
      size: 'big',
    };

    return (
      <div className="Widget">
        <div className="comments">
          <Comment className="positioning" review={reviews[0]} />
          <Comment className="positioning" review={reviews[1]} />
          <Comment className="positioning" review={reviews[2]} />
          <Comment className="positioning" review={reviews[3]} />
          <Comment className="positioning" review={reviews[4]} />
        </div>
        <div className="logo">
          <img alt="☑ Trustpilot" src={logoSrc} />
        </div>
        <div className="rating">
          <Star className="positioning" index={1} { ...starSettings } />
          <Star className="positioning" index={2} { ...starSettings } />
          <Star className="positioning" index={3} { ...starSettings } />
          <Star className="positioning" index={4} { ...starSettings } />
          <Star className="positioning" index={5} { ...starSettings } />
        </div>
      </div>
    );
  }
}

Widget.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      fullName: PropTypes.string,
      location: PropTypes.string,
      reviewBody: PropTypes.string,
      reviewTitle: PropTypes.string,
      starRating: PropTypes.string,
    })
  ),
};

Widget.defaultProps = {
  reviews: [],
};

export default Widget;

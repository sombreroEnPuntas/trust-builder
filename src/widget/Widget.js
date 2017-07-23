import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Comment from './comment';
import { StarFill } from './star';
import withSpinner from './withSpinner';

import './Widget.scss';

const accumulateReviewRatings = (sum, review) => sum + parseInt(review.starRating, 10);
const averageReviewRating = reviews => reviews.reduce(accumulateReviewRatings, 0) / reviews.length;

export class Widget extends Component {
  render() {
    const {
      reviews,
      currentCard,
      totalCards,
      onClickBack,
      onClickNext,
    } = this.props;

    if(reviews.length < 1) {
      return (<div>Loading reviews...</div>);
    }

    const logoSrc = `${process.env.PUBLIC_URL}/logo/255x29.png`;

    const starSettings = {
      rating: averageReviewRating(reviews),
      floating: true,
    };

    const cards = [];

    let index = 0;
    let indexMax = 6;
    let cardIndex;
    for (; index <= indexMax; index++) {
      cardIndex = currentCard + index > totalCards - 1 ?
        currentCard + index - totalCards :
        currentCard + index;

      cards.push(
        <span key={`card-${index}`} className="positioning">
          <Comment review={reviews[cardIndex]} />
        </span>
      );
    }

    return (
      <div className="Widget">
        <button className="button button_type_back" onClick={onClickBack}>&lt;</button>
        <div className="comments">
          {cards}
        </div>
        <button className="button button_type_next" onClick={onClickNext}>&gt;</button>
        <div className="logo">
          <img alt="☑ Trustpilot" src={logoSrc} />
        </div>
        <div className="stars">
          <StarFill { ...starSettings } />
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
  currentCard: PropTypes.number.isRequired,
  onClickBack: PropTypes.func.isRequired,
  onClickNext: PropTypes.func.isRequired,
};

Widget.defaultProps = {
  reviews: [],
};

export default withSpinner(Widget);

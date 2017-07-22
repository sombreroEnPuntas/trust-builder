import React, { Component } from 'react';

import reviews from './mocks/reviews';

import Comment from './widget/comment';
import { Star } from './widget/star';

import './App.scss';

const totalRate = (sum, review) => sum + parseInt(review.starRating, 10);

class App extends Component {
  render() {
    const rating = reviews.reduce(totalRate, 0) / reviews.length;

    return (
      <div className="App">
        <Comment review={reviews[0]} />
        <Comment review={reviews[1]} />
        <Comment review={reviews[2]} />
        <Comment review={reviews[3]} />
        <Comment review={reviews[4]} />
        <Star index={1} rating={rating} size="big" />
        <Star index={2} rating={rating} size="big" />
        <Star index={3} rating={rating} size="big" />
        <Star index={4} rating={rating} size="big" />
        <Star index={5} rating={rating} size="big" />
      </div>
    );
  }
}

export default App;

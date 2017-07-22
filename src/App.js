import React, { Component } from 'react';

import reviews from './mocks/reviews';

import Comment from './widget/comment';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Comment review={reviews[0]} />
      </div>
    );
  }
}

export default App;

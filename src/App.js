import React, { Component } from 'react';

import reviews from './mocks/reviews';

import Widget from './widget';

import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Widget reviews={reviews} totalCards={reviews.length} />
      </div>
    );
  }
}

export default App;

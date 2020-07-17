import React, { Component } from 'react';
import DudeCustomizer from './components/DudeCustomizer';
import OwletCustomizer from './components/OwletCustomizer';
import BuddyCustomizer from './components/BuddyCustomizer';

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="title">
          CUSTOMIZER
        </h1>
        <div className="chars">
          <DudeCustomizer />
          <OwletCustomizer />
          <BuddyCustomizer />
        </div>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';

function withCustomizer(MyComponent, colors) {
  class Wrapper extends Component {
    state = {
      random: colors[0], 
    };
  
    change = () => {
      this.setState({
        random: colors[Math.floor(Math.random() * 5)],
      });
    };

    render() {
      return (
        <MyComponent
          {...this.props}
          random={this.state.random}
          change={this.change}
        />
      )
    }
  } 

  return Wrapper;
}

export default withCustomizer;
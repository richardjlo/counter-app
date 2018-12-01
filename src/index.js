import React from 'react';
import ReactDOM from 'react-dom';
import {Counter} from './components/Counter';

class CounterApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 3,
    }
    this.handleIncrementButton = this.handleIncrementButton.bind(this);
    this.handleDecrementButton = this.handleDecrementButton.bind(this);
  };

  handleIncrementButton() {
    alert('Increment!');
  }

  handleDecrementButton() {
    alert('Decrement');
  }

  render() {
    return(
      <Counter 
        count={this.state.count} 
        onIncrement={this.handleIncrementButton}  
        onDecrement={this.handleDecrementButton}
      />      
    );
  }
};

ReactDOM.render(
  <CounterApp />, 
  document.getElementById('root')
);
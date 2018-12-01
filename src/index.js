import React from 'react';
import ReactDOM from 'react-dom';
import {Counter} from './components/Counter';

class CounterApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    }
    this.handleIncrementButton = this.handleIncrementButton.bind(this);
    this.handleDecrementButton = this.handleDecrementButton.bind(this);
  };

  handleIncrementButton() {
    this.setState({
      count: this.state.count + 1,
    });
  }

  handleDecrementButton() {
    this.setState({
      count: this.state.count - 1,
    });
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
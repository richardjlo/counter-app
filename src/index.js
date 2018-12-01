import React from 'react';
import ReactDOM from 'react-dom';
import {Counter} from './components/Counter';

class CounterApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 3,
    }
  };

  render() {
    return(
      <Counter count={this.state.count} />      
    );
  }
};

ReactDOM.render(
  <CounterApp />, 
  document.getElementById('root')
);
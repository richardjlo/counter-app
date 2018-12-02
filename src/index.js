import React from 'react';
import ReactDOM from 'react-dom';
import {Counter} from './components/Counter';
import {counterReducer} from './reducers/index';
import { increment, decrement } from './actions/actions';
import { createStore } from 'redux'

const store = createStore(counterReducer);

console.log('count ' + store.getState().count);

class CounterApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    }
    // this.handleIncrementButton = this.handleIncrementButton.bind(this);
    // this.handleDecrementButton = this.handleDecrementButton.bind(this);
  };

  // handleIncrementButton() {
  //   this.setState({
  //     count: this.state.count + 1,
  //   });
  // }

  // handleDecrementButton() {
  //   this.setState({
  //     count: this.state.count - 1,
  //   });
  // }

  handleIncrementButton() {
    store.dispatch(increment());
    // alert(store.getState().count);
  }  

  render() {
    return(
      <Counter 
        // count={this.state.count} 
        count={store.getState().count}
        onIncrement={this.handleIncrementButton}  
        // onDecrement={this.handleDecrementButton}
      />      
    );
  }
};

const render = () => {
  ReactDOM.render(
    <CounterApp />, 
    document.getElementById('root')
  );
};

render();
store.subscribe(render);
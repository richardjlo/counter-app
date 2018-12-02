import React from 'react';
import ReactDOM from 'react-dom';
import {Counter} from './components/Counter';
import {counterReducer} from './reducers/index';
import { increment, decrement } from './actions/actions';
import { createStore } from 'redux'

class CounterApp extends React.Component {
  constructor(props) {
    super(props);
  };

  handleIncrementButton() {
    store.dispatch(increment());
  }  
  handleDecrementButton() {
    store.dispatch(decrement());
  }

  render() {
    return(
      <Counter 
        count={store.getState().count}
        onIncrement={this.handleIncrementButton}  
        onDecrement={this.handleDecrementButton}
      />      
    );
  }
};

const store = createStore(counterReducer);

const render = () => {
  ReactDOM.render(
    <CounterApp />, 
    document.getElementById('root')
  );
};

render();
store.subscribe(render);
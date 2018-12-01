import React from 'react';
import ReactDOM from 'react-dom';
import {Counter} from './components/Counter';

const CounterApp = () => {
  return(
    <Counter count={5} />
  );
};

ReactDOM.render(
  <CounterApp />, 
  document.getElementById('root')
);
import React from 'react';
import ReactDOM from 'react-dom';
import {Counter} from './components/Counter';

ReactDOM.render(
  <Counter 
    count={5}
  />, 
  document.getElementById('root')
);
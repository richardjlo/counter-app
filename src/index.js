import React from 'react';
import ReactDOM from 'react-dom';
import { counterReducer } from './reducers';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { CounterAppContainer } from './containers/CounterAppContainer';

import { CounterApp } from './components/CounterApp';

// const store = createStore(
//   counterReducer,
//   applyMiddleware(thunk)
// );

// const render = () => {
//   ReactDOM.render(
//     <Provider store={store}>
//       <CounterAppContainer />
//     </Provider>,
//     document.getElementById('root')
//   );
// };

// render();

const counter1_id = 'b9mY8KQy2p4FIb7MJ5LP';
const counter2_id = 'uB3LUWoA8tsdxDzTq0Py';
const counter3_id = 'uB3LUWoA8tsdxDzTq3xm';

const countersList = {
  isFetching: false, 
  counters: {
    [counter1_id]: {
      value: 1,
    },
    [counter2_id]: {
      value: 2,
    },
    [counter3_id]: {
      value: 4,
    }
  }
};

const render = () => {
  ReactDOM.render(
    <CounterApp countersList={countersList}/>,
    document.getElementById('root')
  );
};

render();


import React from 'react';
import ReactDOM from 'react-dom';
import { counterReducer } from './reducers/index';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
// import CounterApp from './containers/CounterApp';
import { CounterAppMultiple } from './components/CounterAppMultiple';

const store = createStore(counterReducer);

const render = () => {
  ReactDOM.render(
    // <Provider store={store}>
    //   <CounterApp />
    // </Provider>, 
    <CounterAppMultiple countersList={[0,0]} />,
    document.getElementById('root')
  );
};

render();

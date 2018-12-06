import React from 'react';
import ReactDOM from 'react-dom';
// import { counterReducer } from './reducers/index';
import { addCounterReducer } from './reducers/addCounterReducer';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
// import CounterApp from './containers/CounterApp';
import CounterAppMultiple from './containers/CounterAppMultiple';

// const store = createStore(counterReducer);
const store = createStore(addCounterReducer);

const render = () => {
  ReactDOM.render(
    // <Provider store={store}>
    //   <CounterApp />
    // </Provider>, 
    <Provider store={store}>
      <CounterAppMultiple />
    </Provider>,
    // <CounterAppMultiple countersList={[0,1,2]}/>,
    document.getElementById('root')
  );
};

render();

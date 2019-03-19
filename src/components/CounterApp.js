import React from 'react';
import { Counter } from './Counter';

/*
 * Presentational component that adds one or more counters to the DOM
 */

export class CounterApp extends React.Component {
  render() {
    const { 
      countersList, 
      handleAddCounterButton, 
      // handleIncrement, 
      // handleDecrement, 
      // handleDeleteCounterButton,
      // handleAsyncIncrement,
    } = this.props;
    // const counters = countersList.map( (value, index) => {
    //   return (
    //     <Counter
    //       key={index}
    //       count={value}
    //       onIncrement={() => {handleIncrement(index)}}
    //       onDecrement={() => {handleDecrement(index)}}
    //       onDelete={() => {handleDeleteCounterButton(index)}}
    //       onAsyncIncrement={() => {handleAsyncIncrement(index)}}
    //     />
    //   );
    // });

    const countersArr = Object.keys(countersList.counters); // Get counters key into a separate array object
    const counters = countersArr.map( (key) => {
      let counter = countersList.counters[key];
      return (      
        <Counter
          key={key}
          count={counter.value}
        />
      );
    });

    return(
      <div>
        {counters}
        <hr />
        <button
          onClick={() => {handleAddCounterButton()}}
        >
          Add Counter
        </button>
      </div>    
    );    
  }
};

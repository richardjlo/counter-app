import React from 'react';
import { Counter } from './Counter';

/*
 * Presentational component that adds one or more counters to the DOM
 */

export class CounterApp extends React.Component {
  componentDidMount() {
    this.props.fetchCounters();
  }
  render() {
    const { 
      state, 
      handleAddCounterButton, 
      handleIncrement, 
      handleDecrement, 
      handleDeleteCounterButton,
    } = this.props;
    
    const counters = state.counters.map((counter) => {
      return (      
        <Counter
          key={counter.id}
          count={counter.value}
          onDelete={() => {handleDeleteCounterButton(counter.id)}}          
          onIncrement={() => {handleIncrement(counter.id)}}    
          onDecrement={() => {handleDecrement(counter.id)}}                
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
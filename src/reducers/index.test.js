import {counterReducer} from './index'
import { 
  createCounterRequest, 
  createCounterSuccess,
} from '../actions/index';

describe('Counter Reducer', () => {
  const counter1_id = 'b9mY8KQy2p4FIb7MJ5LP';
  const counter2_id = 'uB3LUWoA8tsdxDzTq0Py';
  const counter3_id = 'uB3LUWoA8tsdxDzTq3xm';
  
  const initialState = {
    isFetching: false,
    counters: {
      [counter1_id]: {
        value: 1,
      },
      [counter2_id]: {
        value: 2,
      },
      [counter3_id]: {
        value: 3,
      }
    }
  };  

  it('should return true if Counter Reducer exists', () => {
    expect(counterReducer).toBeDefined();
  })

  it('should provide initial state.', () => {
    expect(counterReducer(undefined, {})).toEqual(initialState);
  })

  it('should return state if action is unknown', () => {
    expect(counterReducer(initialState, {})).toEqual(initialState);
  })

});

describe('createCounterRequest action creator', () => {
  const initialState = {
    isFetching: false,
    counters: {},
  };
  
  Object.freeze(initialState);

  const fetchingNewCounter = {
    isFetching: true,
    counters: {},
  }

  it('should turn on isFetching flag', () => {
    expect( counterReducer(initialState, createCounterRequest()) ).toEqual(fetchingNewCounter);
  });  
});

describe('createCounterSuccess action creator', () => {
  const initialState = {
    isFetching: false,
    counters: {},
  };
  
  Object.freeze(initialState);
  const counter1_id = 'b9mY8KQy2p4FIb7MJ5LP';
  const counter2_id = 'uB3LUWoA8tsdxDzTq0Py';
  const counter3_id = 'uB3LUWoA8tsdxDzTq3xm';

  const oneCounter = {
    isFetching: false,
    counters: {
      [counter1_id]: {
        value: 0,
      }
    }        
  };

  it('should add counter to empty counters list.', () => {
    expect(counterReducer( initialState, createCounterSuccess(counter1_id)) )
      .toEqual(oneCounter);
  });

  Object.freeze(oneCounter);

  const twoCounters = {
    isFetching: false, 
    counters: {
      [counter1_id]: {
        value: 0,
      },
      [counter2_id]: {
        value: 0,
      }
    }     
  };
  
  it('should add counter from 1 counter to 2 counters', () => {
    expect(counterReducer( oneCounter, createCounterSuccess(counter2_id)) ).toEqual(twoCounters);
  });

  Object.freeze(twoCounters);
  const threeCounters = {
    isFetching: false, 
    counters: {
      [counter1_id]: {
        value: 0,
      },
      [counter2_id]: {
        value: 0,
      },
      [counter3_id]: {
        value: 0,
      }
    }
  };

  it('should add counter from 2 counters to 3 counters', () => {
    expect(counterReducer( twoCounters, createCounterSuccess(counter3_id)) ).toEqual(threeCounters);
  });    
});

import {counterReducer} from './index'
import { 
  createCounterRequest, 
  createCounterSuccess,
  fetchCountersRequest,
  fetchCountersSuccess, 
  deleteCounterRequest,
  deleteCounterSuccess,
  incrementRequest,
  incrementSuccess, 
  decrementRequest, 
  decrementSuccess
} from '../actions/index';

describe('Counter Reducer', () => {
  const initialState = {
    isFetching: false,
    counters: {},
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
  };

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

  // Counter 1
  const b9mY8KQy2p4FIb7MJ5LP = {
    created: 1552892019,
    value: 0,
  };

  // Counter 2
  const b9mY8KQy2p4FIb7MJ5LQ = {
    created: 1552892020,
    value: 1,
  };

  // Counter 3
  const b9mY8KQy2p4FIb7MJ5LX = {
    created: 1552892021,
    value: 2,
  };

  const newCounter = {
    b9mY8KQy2p4FIb7MJ5LP: b9mY8KQy2p4FIb7MJ5LP
  };

  const oneCounter = {
    isFetching: false,
    counters: {
      b9mY8KQy2p4FIb7MJ5LP: b9mY8KQy2p4FIb7MJ5LP,      
    }
  };

  it('should add counter to empty counters list.', () => {
    expect(counterReducer( initialState, createCounterSuccess(newCounter)) )
      .toEqual(oneCounter);
  });

  Object.freeze(oneCounter);

  const newCounter2 = {
    b9mY8KQy2p4FIb7MJ5LQ: b9mY8KQy2p4FIb7MJ5LQ,
  }

  const twoCounters = {
    isFetching: false, 
    counters: {
      b9mY8KQy2p4FIb7MJ5LP: b9mY8KQy2p4FIb7MJ5LP,
      b9mY8KQy2p4FIb7MJ5LQ: b9mY8KQy2p4FIb7MJ5LQ,
    }     
  };
  
  it('should add counter from 1 counter to 2 counters', () => {
    expect(counterReducer( oneCounter, createCounterSuccess(newCounter2)) ).toEqual(twoCounters);
  });

  Object.freeze(twoCounters);

  const newCounter3 = {
    b9mY8KQy2p4FIb7MJ5LX: b9mY8KQy2p4FIb7MJ5LX,
  }
  
  const threeCounters = {
    isFetching: false,
    counters: {
      b9mY8KQy2p4FIb7MJ5LP: b9mY8KQy2p4FIb7MJ5LP,
      b9mY8KQy2p4FIb7MJ5LQ: b9mY8KQy2p4FIb7MJ5LQ,
      b9mY8KQy2p4FIb7MJ5LX: b9mY8KQy2p4FIb7MJ5LX,
    }
  };

  it('should add 1 counter to 2 counters.', () => {
    expect( counterReducer(twoCounters, createCounterSuccess(newCounter3))).toEqual(threeCounters);
  });
});

describe('fetchCountersRequest action creator', () => {
  const initialState = {
    isFetching: false,
    counters: {},
  };
  
  Object.freeze(initialState);

  const fetchingData = {
    isFetching: true,
    counters: {},
  };

  it('should turn on isFetching flag', () => {
    expect( counterReducer(initialState, fetchCountersRequest()) ).toEqual(fetchingData);
  });
});

describe('fetchCountersSuccess action creator', () => {
  const initialState = {
    isFetching: false,
    counters: {},
  };

  Object.freeze(initialState);
  const counter1_id = 'b9mY8KQy2p4FIb7MJ5LP';
  const counter2_id = 'uB3LUWoA8tsdxDzTq0Py';
  const counter3_id = 'uB3LUWoA8tsdxDzTq3xm';  

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

  Object.freeze(threeCounters);
  
  it('should update state with counters from db', () => {
    expect( counterReducer(initialState, fetchCountersSuccess(threeCounters.counters)) ).toEqual(threeCounters);
  });
});

describe('deleteCounterRequest action creator', () => {
  const initialState = {
    isFetching: false,
    counters: {},
  };
  
  Object.freeze(initialState);

  const fetchingData = {
    isFetching: true,
    counters: {},
  };

  it('should turn on isFetching flag', () => {
    expect( counterReducer(initialState, deleteCounterRequest()) ).toEqual(fetchingData);
  });  
})

describe('deleteCounterSuccess action creator', () => {
  // Counter 1
  const b9mY8KQy2p4FIb7MJ5LP = {
    created: 1552892019,
    value: 0,
  };

  // Counter 2
  const b9mY8KQy2p4FIb7MJ5LQ = {
    created: 1552892020,
    value: 1,
  };

  // Counter 3
  const b9mY8KQy2p4FIb7MJ5LX = {
    created: 1552892021,
    value: 2,
  };

  const threeCounters = {
    isFetching: false,
    counters: {
      b9mY8KQy2p4FIb7MJ5LP: b9mY8KQy2p4FIb7MJ5LP,
      b9mY8KQy2p4FIb7MJ5LQ: b9mY8KQy2p4FIb7MJ5LQ,
      b9mY8KQy2p4FIb7MJ5LX: b9mY8KQy2p4FIb7MJ5LX,
    },
  };

  Object.freeze(threeCounters);

  const oneCounter = {
    isFetching: false,
    counters: {
      b9mY8KQy2p4FIb7MJ5LP: b9mY8KQy2p4FIb7MJ5LP,      
    }
  };

  Object.freeze(oneCounter);

  const emptyCounters = {
    isFetching: false,
    counters: {},
  }

  it('should delete one single counter', () => {
    expect( counterReducer(oneCounter, deleteCounterSuccess({}))).toEqual(emptyCounters);
  });

  const twoCounters = {
    isFetching: false,
    counters: {
      b9mY8KQy2p4FIb7MJ5LQ: b9mY8KQy2p4FIb7MJ5LQ,
      b9mY8KQy2p4FIb7MJ5LX: b9mY8KQy2p4FIb7MJ5LX,
    },    
  }

  // Deleting counter (b9mY8KQy2p4FIb7MJ5LP)
  it('should delete one single counter from a group of 3', () => {
    expect( counterReducer(threeCounters, deleteCounterSuccess({
      b9mY8KQy2p4FIb7MJ5LQ: b9mY8KQy2p4FIb7MJ5LQ,
      b9mY8KQy2p4FIb7MJ5LX: b9mY8KQy2p4FIb7MJ5LX,
    }))).toEqual(twoCounters);
  });
});

describe('incrementRequest action creator', () => {
  const initialState = {
    isFetching: false,
    counters: {},
  };
  
  Object.freeze(initialState);

  const fetchingData = {
    isFetching: true,
    counters: {},
  };

  it('should turn on isFetching flag', () => {
    expect( counterReducer(initialState, incrementRequest()) ).toEqual(fetchingData);
  });  
});

describe('incrementSuccess action creator', () => {
  // Counter 1
  const b9mY8KQy2p4FIb7MJ5LP = {
    created: 1552892019,
    value: 0,
  };

  // Counter 2
  const b9mY8KQy2p4FIb7MJ5LQ = {
    created: 1552892020,
    value: 1,
  };

  const oneCounter = {
    isFetching: true,
    counters: {
      b9mY8KQy2p4FIb7MJ5LP: b9mY8KQy2p4FIb7MJ5LP,      
    }
  };

  Object.freeze(oneCounter);

  const incrementedCounter = {
    b9mY8KQy2p4FIb7MJ5LP: {
      created: 1552892019,
      value: 1,
    }
  };

  const incrementedCounterState = {
    isFetching: false,
    counters: {
      b9mY8KQy2p4FIb7MJ5LP: {
        created: 1552892019,
        value: 1,
      },      
    }
  };

  Object.freeze(oneCounter);

  it('should increment counter', () => {
    expect(counterReducer(oneCounter, incrementSuccess(incrementedCounter))).toEqual(incrementedCounterState)
  });

  const twoCounters = {
    isFetching: false,
    counters: {
      b9mY8KQy2p4FIb7MJ5LP: b9mY8KQy2p4FIb7MJ5LP,
      b9mY8KQy2p4FIb7MJ5LQ: b9mY8KQy2p4FIb7MJ5LQ,
    },    
  };

  Object.freeze(twoCounters);

  const incrementedCounter2 = {
    b9mY8KQy2p4FIb7MJ5LP: {
      created: 1552892019,
      value: 0,
    },
    b9mY8KQy2p4FIb7MJ5LQ: b9mY8KQy2p4FIb7MJ5LQ,
  }

  const incrementedCounterState2 = {
    isFetching: false,
    counters: {
      b9mY8KQy2p4FIb7MJ5LP: {
        created: 1552892019,
        value: 0,
      },
      b9mY8KQy2p4FIb7MJ5LQ: b9mY8KQy2p4FIb7MJ5LQ,
    },
  }

  it('should increment 1 of 2 counters', () => {
    expect(counterReducer(twoCounters, incrementSuccess(incrementedCounter2))).toEqual(incrementedCounterState2)
  });
});

describe('decrementRequest action creator', () => {
  const initialState = {
    isFetching: false,
    counters: {},
  };
  
  Object.freeze(initialState);

  const fetchingData = {
    isFetching: true,
    counters: {},
  };

  it('should turn on isFetching flag', () => {
    expect(counterReducer(initialState, decrementRequest())).toEqual(fetchingData);
  })
});

describe('decrementSuccess action creator', () => {
  // Counter 1
  const b9mY8KQy2p4FIb7MJ5LP = {
    created: 1552892019,
    value: 0,
  };

  // Counter 2
  const b9mY8KQy2p4FIb7MJ5LQ = {
    created: 1552892020,
    value: 0,
  };

  const initialState = {
    isFetching: true,
    counters: {
      b9mY8KQy2p4FIb7MJ5LP: b9mY8KQy2p4FIb7MJ5LP,
      b9mY8KQy2p4FIb7MJ5LQ: b9mY8KQy2p4FIb7MJ5LQ,
    },    
  };

  Object.freeze(initialState);

  const decrementedState1 = {
    isFetching: false,
    counters: {
      b9mY8KQy2p4FIb7MJ5LP: {
        created: 1552892019,
        value: -1,
      },
      b9mY8KQy2p4FIb7MJ5LQ: b9mY8KQy2p4FIb7MJ5LQ,
    },        
  };

  const decrementedState1a = {
    isFetching: false,
    counters: {
      b9mY8KQy2p4FIb7MJ5LP: {
        created: 1552892019,
        value: -2,
      },
      b9mY8KQy2p4FIb7MJ5LQ: b9mY8KQy2p4FIb7MJ5LQ,
    },        
  };  

  const decrementedState2 = {
    isFetching: false,
    counters: {
      b9mY8KQy2p4FIb7MJ5LP: b9mY8KQy2p4FIb7MJ5LP,
      b9mY8KQy2p4FIb7MJ5LQ: {
        created: 1552892020,
        value: -1,
      },
    },        
  };

  it('should decrement counter', () => {
    expect( counterReducer(initialState, decrementSuccess('b9mY8KQy2p4FIb7MJ5LP'))).toEqual(decrementedState1);
  });

  it('should decrement counter', () => {
    expect( counterReducer(initialState, decrementSuccess('b9mY8KQy2p4FIb7MJ5LQ'))).toEqual(decrementedState2);
  });
  
  Object.freeze(decrementedState1);

  it('should decrement counter', () => {
    expect( counterReducer(decrementedState1, decrementSuccess('b9mY8KQy2p4FIb7MJ5LP'))).toEqual(decrementedState1a);
  });
});


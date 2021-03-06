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
  decrementSuccess, 
  createCounterFailure, 
  fetchCountersFailure, 
  deleteCounterFailure, 
  incrementFailure, 
  decrementFailure
} from '../actions/index';



describe('Counter Reducer', () => {
  const initialState = {
    isFetching: false,
    counters: [],
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
    counters: [],
  };
  
  Object.freeze(initialState);

  const fetchingNewCounter = {
    isFetching: true,
    counters: [],
  };

  it('should turn on isFetching flag', () => {
    expect( counterReducer(initialState, createCounterRequest()) ).toEqual(fetchingNewCounter);
  });  
});

describe('createCounterSuccess action creator', () => {
  const initialState = {
    isFetching: true,
    counters: [],
  };
  
  Object.freeze(initialState);

  const counter1 = {
    created: 1552892019,
    value: 0,
    id: 'b9mY8KQy2p4FIb7MJ5LP',
  };

  const oneCounterState = {
    isFetching: false,
    counters: [
      counter1,
    ],
  };

  it('should add counter to empty counters list.', () => {
    expect(counterReducer( initialState, createCounterSuccess(counter1)) )
      .toEqual(oneCounterState);
  });

  Object.freeze(oneCounterState);

    const counter2 = {
      created: 1552892020,
      value: 1,
      id: 'b9mY8KQy2p4FIb7MJ5LQ',
    };    

  const twoCountersState = {
    isFetching: false, 
    counters: [
      counter1,
      counter2,
    ],
  };
  
  it('should add counter from 1 counter to 2 counters', () => {
    expect(counterReducer( oneCounterState, createCounterSuccess(counter2)) ).toEqual(twoCountersState);
  });

  Object.freeze(twoCountersState);

  const counter3 = {
    created: 1552892021,
    value: 2,
    id: 'b9mY8KQy2p4FIb7MJ5LX'
  };

  const threeCountersState = {
    isFetching: false,
    counters: [
      counter1,
      counter2,
      counter3,
    ],
  };

  it('should add 1 counter to 2 counters.', () => {
    expect( counterReducer(twoCountersState, createCounterSuccess(counter3))).toEqual(threeCountersState);
  });
});

describe('createCounterFailure action creator', () => {
  const initialState = {
    isFetching: true,
    counters: [],
  };

  Object.freeze(initialState);

  const errorState = {
    isFetching: false,
    counters: [],
    error: {
      code: "INVALID CREATE COUNTER ACTION",
      message: "Oops something went wrong",
    }
  }

  it('should return error', () => {
    expect(counterReducer(initialState, createCounterFailure())).toEqual(errorState);
  })
});

describe('fetchCountersRequest action creator', () => {
  const initialState = {
    isFetching: false,
    counters: [],
  };
  
  Object.freeze(initialState);

  const fetchingData = {
    isFetching: true,
    counters: [],
  };

  it('should turn on isFetching flag', () => {
    expect( counterReducer(initialState, fetchCountersRequest()) ).toEqual(fetchingData);
  });
});

describe('fetchCountersSuccess action creator', () => {
  const initialState = {
    isFetching: false,
    counters: [],
  };

  Object.freeze(initialState);
  
  const counter1 = {
    created: 1552892019,
    value: 0,
    id: 'b9mY8KQy2p4FIb7MJ5LP',
  };
  
  const counter2 = {
    created: 1552892020,
    value: 1,
    id: 'b9mY8KQy2p4FIb7MJ5LQ',
  };    
  
  const counter3 = {
    created: 1552892021,
    value: 2,
    id: 'b9mY8KQy2p4FIb7MJ5LX'
  };

  const threeCountersState = {
    isFetching: false, 
    counters: [
      counter1,
      counter2,
      counter3,
    ],
  };

  Object.freeze(threeCountersState);
  
  it('should update state with counters from db', () => {
    expect( counterReducer(initialState, fetchCountersSuccess(threeCountersState.counters)) ).toEqual(threeCountersState);
  });
});

describe('fetchCounterFailure action creator', () => {
  const initialState = {
    isFetching: true,
    counters: [],
  };

  Object.freeze(initialState);

  const errorState = {
    isFetching: false,
    counters: [],
    error: {
      code: "INVALID FETCH COUNTERS ACTION",
      message: "Oops something went wrong",
    }
  }

  it('should return error', () => {
    expect(counterReducer(initialState, fetchCountersFailure())).toEqual(errorState);
  })
});

describe('deleteCounterRequest action creator', () => {
  const initialState = {
    isFetching: false,
    counters: [],
  };
  
  Object.freeze(initialState);

  const fetchingData = {
    isFetching: true,
    counters: [],
  };

  it('should turn on isFetching flag', () => {
    expect( counterReducer(initialState, deleteCounterRequest()) ).toEqual(fetchingData);
  });  
})

describe('deleteCounterSuccess action creator', () => {
  const counter1 = {
    created: 1552892019,
    value: 0,
    id: 'b9mY8KQy2p4FIb7MJ5LP',
  };

  const oneCounterState = {
    isFetching: false,
    counters: [
      counter1,
    ]
  };

  Object.freeze(oneCounterState);

  const emptyCounters = {
    isFetching: false,
    counters: [],
  }

  it('should delete one single counter', () => {
    expect( counterReducer(oneCounterState, deleteCounterSuccess(counter1.id))).toEqual(emptyCounters);
  });

  const counter2 = {
    created: 1552892020,
    value: 1,
    id: 'b9mY8KQy2p4FIb7MJ5LQ',
  };    

  const counter3 = {
    created: 1552892021,
    value: 2,
    id: 'b9mY8KQy2p4FIb7MJ5LX'
  };

  const threeCountersState = {
    isFetching: false,
    counters: [
      counter1,
      counter2,
      counter3,
    ],
  };

  Object.freeze(threeCountersState);

  const twoCountersMinusCounter1State = {
    isFetching: false,
    counters: [
      counter2, 
      counter3
    ],
  }

  const twoCountersMinusCounter2State = {
    isFetching: false,
    counters: [
      counter1,
      counter3
    ],
  }

  // Deleting counter (counter1)
  it('should delete one single counter from a group of 3', () => {
    expect( counterReducer(threeCountersState, deleteCounterSuccess(counter1.id)))
      .toEqual(twoCountersMinusCounter1State);
  });

  // Deleting counter (counter2)
  it('should delete one single counter from a group of 3', () => {
    expect( counterReducer(threeCountersState, deleteCounterSuccess(counter2.id)))
      .toEqual(twoCountersMinusCounter2State);
  });
});

describe('deleteCounterFailure action creator', () => {
  const initialState = {
    isFetching: true,
    counters: [],
  };

  Object.freeze(initialState);

  const errorState = {
    isFetching: false,
    counters: [],
    error: {
      code: "INVALID DELETE COUNTER ACTION",
      message: "Oops something went wrong",
    }
  }

  it('should return error', () => {
    expect(counterReducer(initialState, deleteCounterFailure())).toEqual(errorState);
  })
});

describe('incrementRequest action creator', () => {
  const initialState = {
    isFetching: false,
    counters: [],
  };
  
  Object.freeze(initialState);

  const fetchingData = {
    isFetching: true,
    counters: [],
  };

  it('should turn on isFetching flag', () => {
    expect( counterReducer(initialState, incrementRequest()) ).toEqual(fetchingData);
  });  
});

describe('incrementSuccess action creator', () => {
  const counter1 = {
    created: 1552892019,
    value: 0,
    id: 'b9mY8KQy2p4FIb7MJ5LP',
  };

  const initialState = {
    isFetching: true,
    counters: [
      counter1,
    ]
  };

  Object.freeze(initialState);

  const counter1Incremented = {
    created: 1552892019,
    value: 1,
    id: 'b9mY8KQy2p4FIb7MJ5LP',
  };
  
  const incrementedCounterState = {
    isFetching: false,
    counters: [
      counter1Incremented,
    ],
  };

  it('should increment counter', () => {
    expect(counterReducer(initialState, incrementSuccess(counter1Incremented))).toEqual(incrementedCounterState)
  });

  const counter2 = {
    created: 1552892020,
    value: 1,
    id: 'b9mY8KQy2p4FIb7MJ5LQ',
  };      

  const initialState2 = {
    isFetching: false,
    counters: [
      counter1,
      counter2,
  ],    
  };

  Object.freeze(initialState2);

  const counter2Incremented = {
    created: 1552892020,
    value: 2,
    id: 'b9mY8KQy2p4FIb7MJ5LQ',
  };      

  const incrementedCounterState2 = {
    isFetching: false,
    counters: [
      counter1,
      counter2Incremented
    ],
  };

  it('should increment 1 of 2 counters', () => {
    expect(counterReducer(initialState2, incrementSuccess(counter2Incremented))).toEqual(incrementedCounterState2)
  });
});

describe('incrementFailure action creator', () => {
  const initialState = {
    isFetching: true,
    counters: [],
  };

  Object.freeze(initialState);

  const errorState = {
    isFetching: false,
    counters: [],
    error: {
      code: "INVALID INCREMENT ACTION",
      message: "Oops something went wrong",
    }
  }

  it('should return error', () => {
    expect(counterReducer(initialState, incrementFailure())).toEqual(errorState);
  })
});

describe('decrementRequest action creator', () => {
  const initialState = {
    isFetching: false,
    counters: [],
  };
  
  Object.freeze(initialState);

  const fetchingData = {
    isFetching: true,
    counters: [],
  };

  it('should turn on isFetching flag', () => {
    expect(counterReducer(initialState, decrementRequest())).toEqual(fetchingData);
  })
});

describe('decrementSuccess action creator', () => {
  const counter1 = {
    created: 1552892019,
    value: 0,
    id: 'b9mY8KQy2p4FIb7MJ5LP',
  };

  const initialState = {
    isFetching: true,
    counters: [
      counter1,
    ],
  };

  Object.freeze(initialState);

  const decrementedCounter1 = {
    created: 1552892019,
    value: -1,
    id: 'b9mY8KQy2p4FIb7MJ5LP',
  };
  
  const decrementedCounterState = {
    isFetching: false,
    counters: [
      decrementedCounter1,
    ]
  };

  it('should decrement counter', () => {
    expect(counterReducer(initialState, decrementSuccess(decrementedCounter1))).toEqual(decrementedCounterState)
  });  

  const counter2 = {
    created: 1552892020,
    value: 0,
    id: 'b9mY8KQy2p4FIb7MJ5LQ',
  };      

  const initialState2 = {
    isFetching: false,
    counters: [
      counter1,
      counter2,
    ],
  };

  Object.freeze(initialState2);

  const decrementedCounter2 = {
    created: 1552892020,
    value: -1,
    id: 'b9mY8KQy2p4FIb7MJ5LQ',
  };      

  const decrementedCounterState2 = {
    isFetching: false,
    counters: [
      counter1,
      decrementedCounter2,
    ],
  };

  it('should increment 1 of 2 counters', () => {
    expect(counterReducer(initialState2, incrementSuccess(decrementedCounter2))).toEqual(decrementedCounterState2)
  });
});

describe('decrementFailure action creator', () => {
  const initialState = {
    isFetching: true,
    counters: [],
  };

  Object.freeze(initialState);

  const errorState = {
    isFetching: false,
    counters: [],
    error: {
      code: "INVALID DECREMENT ACTION",
      message: "Oops something went wrong",
    }
  }

  it('should return error', () => {
    expect(counterReducer(initialState, decrementFailure())).toEqual(errorState);
  })
});

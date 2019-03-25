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

  // Counter 1
  const b9mY8KQy2p4FIb7MJ5LP = {
    created: 1552892019,
    value: 0,
    id: 'b9mY8KQy2p4FIb7MJ5LP',
  };

  const oneCounterState = {
    isFetching: false,
    counters: [
      b9mY8KQy2p4FIb7MJ5LP,
    ],
  };

  it('should add counter to empty counters list.', () => {
    expect(counterReducer( initialState, createCounterSuccess(b9mY8KQy2p4FIb7MJ5LP)) )
      .toEqual(oneCounterState);
  });

  Object.freeze(oneCounterState);

    // Counter 2
    const b9mY8KQy2p4FIb7MJ5LQ = {
      created: 1552892020,
      value: 1,
      id: 'b9mY8KQy2p4FIb7MJ5LQ',
    };    

  const twoCountersState = {
    isFetching: false, 
    counters: [
      b9mY8KQy2p4FIb7MJ5LP,
      b9mY8KQy2p4FIb7MJ5LQ
    ],
  };
  
  it('should add counter from 1 counter to 2 counters', () => {
    expect(counterReducer( oneCounterState, createCounterSuccess(b9mY8KQy2p4FIb7MJ5LQ)) ).toEqual(twoCountersState);
  });

  Object.freeze(twoCountersState);

  // Counter 3
  const b9mY8KQy2p4FIb7MJ5LX = {
    created: 1552892021,
    value: 2,
    id: 'b9mY8KQy2p4FIb7MJ5LX'
  };

  const threeCountersState = {
    isFetching: false,
    counters: [
      b9mY8KQy2p4FIb7MJ5LP,
      b9mY8KQy2p4FIb7MJ5LQ,
      b9mY8KQy2p4FIb7MJ5LX,
    ],
  };

  it('should add 1 counter to 2 counters.', () => {
    expect( counterReducer(twoCountersState, createCounterSuccess(b9mY8KQy2p4FIb7MJ5LX))).toEqual(threeCountersState);
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
/*
describe('fetchCounterFailure action creator', () => {
  const initialState = {
    isFetching: true,
    counters: {},
  };

  Object.freeze(initialState);

  const errorState = {
    isFetching: false,
    counters: {},
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
    expect( counterReducer(oneCounter, deleteCounterSuccess('b9mY8KQy2p4FIb7MJ5LP'))).toEqual(emptyCounters);
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
    expect( counterReducer(threeCounters, deleteCounterSuccess('b9mY8KQy2p4FIb7MJ5LP')))
      .toEqual(twoCounters);
  });
});

describe('deleteCounterFailure action creator', () => {
  const initialState = {
    isFetching: true,
    counters: {},
  };

  Object.freeze(initialState);

  const errorState = {
    isFetching: false,
    counters: {},
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
  const initialState = {
    isFetching: true,
    counters: {
      b9mY8KQy2p4FIb7MJ5LP: {
        created: 1552892019,
        value: 0,
      },
    }
  };

  Object.freeze(initialState);

  const newCounter = {
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

  it('should increment counter', () => {
    expect(counterReducer(initialState, incrementSuccess(newCounter))).toEqual(incrementedCounterState)
  });

  const initialState2 = {
    isFetching: false,
    counters: {
      b9mY8KQy2p4FIb7MJ5LP: {
        created: 1552892019,
        value: 0,
      },
      b9mY8KQy2p4FIb7MJ5LQ : {
        created: 1552892020,
        value: 0,
      },
    },    
  };

  Object.freeze(initialState2);

  const newCounter2 = {
    b9mY8KQy2p4FIb7MJ5LQ : {
      created: 1552892020,
      value: 1,
    }    
  };

  const incrementedCounterState2 = {
    isFetching: false,
    counters: {
      b9mY8KQy2p4FIb7MJ5LP: {
        created: 1552892019,
        value: 0,
      },
      b9mY8KQy2p4FIb7MJ5LQ : {
        created: 1552892020,
        value: 1,
      },
    },    
  };

  it('should increment 1 of 2 counters', () => {
    expect(counterReducer(initialState2, incrementSuccess(newCounter2))).toEqual(incrementedCounterState2)
  });
});

describe('incrementFailure action creator', () => {
  const initialState = {
    isFetching: true,
    counters: {},
  };

  Object.freeze(initialState);

  const errorState = {
    isFetching: false,
    counters: {},
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
  const initialState = {
    isFetching: true,
    counters: {
      b9mY8KQy2p4FIb7MJ5LP: {
        created: 1552892019,
        value: 0,
      },
    }
  };

  Object.freeze(initialState);

  const newCounter = {
    b9mY8KQy2p4FIb7MJ5LP: {
      created: 1552892019,
      value: -1,
    }    
  };
  
  const decrementedCounterState = {
    isFetching: false,
    counters: {
      b9mY8KQy2p4FIb7MJ5LP: {
        created: 1552892019,
        value: -1,
      },
    }
  };

  it('should decrement counter', () => {
    expect(counterReducer(initialState, decrementSuccess(newCounter))).toEqual(decrementedCounterState)
  });  

  const initialState2 = {
    isFetching: false,
    counters: {
      b9mY8KQy2p4FIb7MJ5LP: {
        created: 1552892019,
        value: 0,
      },
      b9mY8KQy2p4FIb7MJ5LQ : {
        created: 1552892020,
        value: 0,
      },
    },    
  };

  Object.freeze(initialState2);

  const newCounter2 = {
    b9mY8KQy2p4FIb7MJ5LQ : {
      created: 1552892020,
      value: -1,
    }    
  };

  const decrementedCounterState2 = {
    isFetching: false,
    counters: {
      b9mY8KQy2p4FIb7MJ5LP: {
        created: 1552892019,
        value: 0,
      },
      b9mY8KQy2p4FIb7MJ5LQ : {
        created: 1552892020,
        value: -1,
      },
    },    
  };

  it('should increment 1 of 2 counters', () => {
    expect(counterReducer(initialState2, incrementSuccess(newCounter2))).toEqual(decrementedCounterState2)
  });
});

describe('decrementFailure action creator', () => {
  const initialState = {
    isFetching: true,
    counters: {},
  };

  Object.freeze(initialState);

  const errorState = {
    isFetching: false,
    counters: {},
    error: {
      code: "INVALID DECREMENT ACTION",
      message: "Oops something went wrong",
    }
  }

  it('should return error', () => {
    expect(counterReducer(initialState, decrementFailure())).toEqual(errorState);
  })
});


*/
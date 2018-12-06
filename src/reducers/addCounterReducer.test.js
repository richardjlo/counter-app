import {addCounterReducer} from './addCounterReducer';

describe('addCounterReducer', () => {
  it('should return true if addCounterReducer exists', () => {
    expect(addCounterReducer).toBeDefined();
  }) 

  it('should provide initial state to be counters = []', () => {
    expect(addCounterReducer(undefined, {})).toEqual([]);
  })  
});
import {addCounterReducer} from './addCounterReducer';
import { addCounter } from '../actions/index';

describe('addCounterReducer', () => {
  it('should return true if addCounterReducer exists', () => {
    expect(addCounterReducer).toBeDefined();
  }) 

  it('should provide initial state to be counters = []', () => {
    expect(addCounterReducer(undefined, {})).toEqual([]);
  })  

  const prevState = [];
  Object.freeze(prevState);
  it('should add counter from [] to [0]', () => {
    expect(addCounterReducer( prevState, addCounter()) ).toEqual([0]);
  })

  it('should add counter from 1 counter ([0]) to 2 counters ([0, 0])', () => {
    expect(addCounterReducer( [0], addCounter()) ).toEqual([0, 0]);
  })

  it('should add counter from 2 counters ([0, 0]) to 3 counters ([0, 0, 0])', () => {
    expect(addCounterReducer( [0, 0], addCounter()) ).toEqual([0, 0, 0]);
  })
});
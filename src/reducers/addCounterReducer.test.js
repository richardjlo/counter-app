import {addCounterReducer} from './addCounterReducer';
import { addCounter } from '../actions/index';

describe('addCounterReducer', () => {
  it('should return true if addCounterReducer exists', () => {
    expect(addCounterReducer).toBeDefined();
  }) 

  it('should provide initial state to be counters = []', () => {
    expect(addCounterReducer(undefined, {})).toEqual([]);
  })  

  it('should add counter from [] to [0]', () => {
    expect(addCounterReducer( [], addCounter())  ).toEqual([0]);
  })
});
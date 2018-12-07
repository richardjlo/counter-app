import {counterReducer} from './index'
import { addCounter, increment, decrement , deleteCounter} from '../actions/index';

describe('addCounterReducer', () => {
  it('should return true if addCounterReducer exists', () => {
    expect(counterReducer).toBeDefined();
  }) 

  it('should provide initial state to be counters = []', () => {
    expect(counterReducer(undefined, {})).toEqual([]);
  })  

  it('should return state if action is unknown', () => {
    expect(counterReducer([], {})).toEqual([]);
  })  

  const prevState = [];
  Object.freeze(prevState);
  it('should add counter from [] to [0]', () => {
    expect(counterReducer( prevState, addCounter()) ).toEqual([0]);
  })

  it('should add counter from 1 counter ([0]) to 2 counters ([0, 0])', () => {
    expect(counterReducer( [0], addCounter()) ).toEqual([0, 0]);
  })

  it('should add counter from 2 counters ([0, 0]) to 3 counters ([0, 0, 0])', () => {
    expect(counterReducer( [0, 0], addCounter()) ).toEqual([0, 0, 0]);
  })

  const prevState1 = [0];
  Object.freeze(prevState1);
  it('should increment counter @ 0 from 0 to 1', () => {
    expect(counterReducer( prevState1, increment(0)) ).toEqual([1]);
  })  

  const prevState2 = [2];
  Object.freeze(prevState2);
  it('should decrement counter @ 0 from 2 to 1', () => {
    expect(counterReducer( prevState2, decrement(0)) ).toEqual([1]);
  })    

  const singleCounter = [0];
  Object.freeze(singleCounter);
  it('should delete counter', () => {
    expect(counterReducer( singleCounter, deleteCounter(0)) ).toEqual([]);
  })

  const threeCounters = [0, 1, 2];
  Object.freeze(threeCounters);
  it('should delete 2nd counter', () => {
    expect(counterReducer( threeCounters, deleteCounter(1)) ).toEqual([0, 2]);
  })
});
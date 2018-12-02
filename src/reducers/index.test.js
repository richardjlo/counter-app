import {counterReducer} from './index';
import {increment, decrement} from '../actions/actions';

describe('counter reducer', () => {
  it('should return true if counterReducer exists', () => {
    expect(counterReducer).toBeDefined();
  })

  it('should provide initial state to be count = 0', () => {
    expect(counterReducer(undefined, {})).toEqual({count: 0});
  })

  it('should increment counter from 0 to 1', () => {
    expect(counterReducer( { count: 0 }, increment())  ).toEqual({ count: 1 });
  })

  it('should decrement counter from 5 to 4', () => {
    expect(counterReducer( { count: 5 }, decrement() )).toEqual({ count: 4});
  })

  it('should return same state if passing undefined action', () => {
    expect(counterReducer( { count: 2 }, { type: 'unkown' } )).toEqual({ count: 2});
  })
});

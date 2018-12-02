import {counterReducer} from './index';
import {increment} from '../actions/actions';

describe('counter reducer', () => {
  it('counterReducer exists', () => {
    expect(counterReducer).toBeDefined();
  })

  it('increment counter from 0 to 1', () => {
    expect(counterReducer({ count: 0 }, increment())).toEqual({ count: 1 });
  })
});

import { createReducer, on, State } from '@ngrx/store';
import { customDecrement, customInrement, decrement, increment, reset } from './counter.actions';
import { initialState } from './counter.state';

export function counterReducer(state: any, action: any) {
  return _counterReducer(state, action);
}

const _counterReducer = createReducer(
  initialState,
  on(increment, (state) => {
    return {
      ...state,
      counter: state.counter + 1,
    };
  }),
  on(decrement, (state) => {
    return {
      ...state,
      counter: state.counter - 1,
    };
  }),
  on(reset, (state) => {
    return {
      ...state,
      counter: initialState.counter,
    };
  })
  ,
  on(customInrement, (state,action) => {
    return {
      ...state,
      counter: initialState.counter+action.value
    };
  }),
  on(customDecrement, (state,action) => {
    return {
      ...state,
      counter: initialState.counter-action.value
    };
  })
);

import { createReducer, on } from '@ngrx/store';
import { GlobalState } from './global.state';
import { loadSpinner } from './App.actions';

export function AppReducer(state: any, action: any) {
  return _AppReducer(state, action);
}

const _AppReducer = createReducer(
 GlobalState,
  on(loadSpinner, (state, action) => {
    
    return {
      ...state,
      isLoaded:action.isLoaded
    };
  })
);

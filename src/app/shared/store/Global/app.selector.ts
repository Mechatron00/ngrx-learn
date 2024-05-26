import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AppStateModel } from "./AppState.model";
import { loadSpinner } from "./App.actions";

const getAppState = createFeatureSelector<AppStateModel>('blog');

export const getSpinnerState = createSelector(getAppState, (state) => {
    return state.isLoaded
  });
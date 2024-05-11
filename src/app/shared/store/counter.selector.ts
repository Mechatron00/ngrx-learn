import { createFeatureSelector, createSelector } from "@ngrx/store";
import { counterModel } from "./counter.state";

const getCounterState =createFeatureSelector<counterModel>('counter');

export const getCounter=createSelector(getCounterState,(state)=>{
    return state.counter
})
export const getTitle=createSelector(getCounterState,(state)=>{
    return state.title
})
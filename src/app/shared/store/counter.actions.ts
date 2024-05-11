import { createAction, props } from "@ngrx/store";

export const increment = createAction("increment")
export const decrement = createAction("decrement")
export const reset = createAction("reset")
export const customInrement = createAction("custominrement", props<{value:number}>())
export const customDecrement = createAction("customdecrement", props<{value:number}>())
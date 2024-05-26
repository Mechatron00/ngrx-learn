import { createAction, props } from "@ngrx/store"

export const SHOW_ALERT='[app event] show alert'
export const EMPTY_ALERT='[app event] empty'
export const LOAD_SPINNER='[blog page] load spinner'

export const showAlert = createAction(SHOW_ALERT,props<{message:string}>())
export const showEmpty = createAction(EMPTY_ALERT)

export const loadSpinner = createAction(LOAD_SPINNER,props<{isLoaded:boolean}>())
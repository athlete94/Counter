import {combineReducers, createStore} from "redux";
import {CounterReducer1} from "./CounterReducer1";
import {CounterReducer2} from "./CounterReducer2";

let rootReducers = combineReducers({CounterReducer1})

export let store = createStore(rootReducers)
export type RootStateType = ReturnType<typeof rootReducers>
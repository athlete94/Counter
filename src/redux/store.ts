import {combineReducers, createStore} from "redux";
import {CounterReducer1} from "./CounterReducer1";
import {CounterReducer2} from "./CounterReducer2";
import {loadState, saveState} from "../components/utils/localStorage-utils";

let rootReducers = combineReducers({
    CounterReducer1,
    CounterReducer2
})

export let store = createStore(rootReducers, loadState())
export type RootStateType = ReturnType<typeof rootReducers>


store.subscribe(() => {
    saveState(store.getState())
})

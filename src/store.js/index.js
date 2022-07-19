import { legacy_createStore as createStore } from "redux";

const reducerFn = (state = {counter: 2}, action ) => {
    return state
}

const store = createStore(reducerFn)

export default store
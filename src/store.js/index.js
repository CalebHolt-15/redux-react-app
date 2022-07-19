import { legacy_createStore as createStore } from "redux";

const reducerFn = (state = {counter: 0}, action ) => {
    //should be Synchronous
    //We should not mutate the original state
    //It should always be a copy of the original state

    if (action.type === "INCREMENT") {
        return {counter : state.counter + 1}
    }

    if (action.type === "DECREMENT") {
        return {counter : state.counter - 1}
    }

    if (action.type === "ADDBY") {
        return {counter : state.counter + action.payload}
    }

    return state
}

const store = createStore(reducerFn)

export default store
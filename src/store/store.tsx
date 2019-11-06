import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import todos from "../reducers/todos"
function configureStore(initialState ?:any) {
    return createStore(
        combineReducers({todos}),
        initialState,
        applyMiddleware(thunk),
    );
}
export const store = configureStore();
import {createStore, applyMiddleware, combineReducers} from 'redux';
import { connectRouter } from 'connected-react-router'
import thunk from 'redux-thunk';
import todos from "../reducers/todos"
import { createBrowserHistory } from 'history';
export const history=createBrowserHistory();
function configureStore(initialState ?:any) {
    return createStore(
        combineReducers({
            router: connectRouter(history),
            todos}),
        initialState,
        applyMiddleware(thunk),
    );
}

export const store = configureStore();
import {createStore, applyMiddleware, combineReducers, compose} from 'redux';
import {connectRouter, routerMiddleware} from 'connected-react-router'
import thunk from 'redux-thunk';
import todos from "../reducers/todos"
import {createBrowserHistory} from 'history';

export const history = createBrowserHistory();

function configureStore(initialState ?: any) {
    return createStore(
        combineReducers({
            router: connectRouter(history),
            todos
        }),
        initialState,
        compose(applyMiddleware(
            thunk,
            routerMiddleware(history))
        )
    );
}

export const store = configureStore();
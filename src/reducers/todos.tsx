import {Actions as at, Action} from '../constants';

export const initialState: any = {
    todos: [],
    error: undefined,
}

function reducer(state: any = initialState, action: Action) {
    switch (action.type) {
        case at.getItemsStarting:
            return {...state};
        case at.getItemsSuccess:
            let {todos} = action.payload;
            return {...state, todos}
        case at.getItemsError:
            let {error} = action.payload;
            return {...state, error}
        default:
            return state
    }
}

export default reducer
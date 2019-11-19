import {Actions as at, Action} from '../constants';

export const initialState: any = {
    todos: [],
    error: undefined,
    loading: false,
}

function reducer(state: any = initialState, action: Action) {
    switch (action.type) {
        case at.getItemsStarting:
            return {...state, loading: true,};
        case at.getItemsSuccess:
            let {todos} = action.payload;
            return {...state, todos, loading: false}
        case at.getItemsError:
            let {error} = action.payload;
            return {...state, error, loading: false}
        default:
            return state
    }
}

export default reducer
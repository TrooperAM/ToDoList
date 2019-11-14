import {Actions as at, Action} from "../constants"

export function getItemsErrored(error: string) {
    return {
        type: at.getItemsError,
        payload: error,
        loading: false,
    };
}

export function getItemsStarting() {
    return {
        type: at.getItemsStarting,
        loading: true,
    };
}

export function getItemsSuccess(todos: any): Action {
    return {
        type: at.getItemsSuccess,
        payload: todos,
        loading: false,
    };
}
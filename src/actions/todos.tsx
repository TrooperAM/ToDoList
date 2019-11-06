import {Actions as at} from "../constants"

export function getItemsErrored(error: string) {
    return {
        type: at.getItemsError,
        payload:error,
    };
}
export function getItemsStarting() {
    return {
        type: at.getItemsStarting,
    };
}
export function getItemsSuccess(todos: any) {
    return {
        type: at.getItemsSuccess,
        payload: todos,
    };
}
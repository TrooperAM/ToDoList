export enum Actions {
    getItemsStarting = 'GET_ITEMS_STARTING',
    getItemsSuccess = 'GET_ITEMS_SUCCESS',
    getItemsError = 'GET_ITEMS_ERROR',
}

export interface Action {
    type: string,
    payload: any,
    loading: boolean,
}

export interface TodoListItem {
    id: number,
    info: string,
    complete: boolean,
}
export interface todoProps {
    todos: number[],
    requestItems: () => void,
}

export const MAX_TODO_LENGTH: number = 255;
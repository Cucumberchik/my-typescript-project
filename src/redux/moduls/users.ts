
import { TypeTodo } from '../../types/types'

export type TypeState = {
    users: TypeTodo[];
};
let initialState = {
    users: [],
};
type TypeAction = {
    payload: TypeTodo,
    type: string
};
export default function users(state: TypeState = initialState, action: TypeAction) {
    switch (action.type) {
        case "add":
            return {
                ...state,
                users: [...state.users, action.payload]
            };
        default:
            return state;
    }
}


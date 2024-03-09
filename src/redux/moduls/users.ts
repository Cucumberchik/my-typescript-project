
import { TypeTodo } from '../../types/types'

export type IState = {
    users: TypeTodo[];
};
let initialState = {
    users: [],
};
type TypeAction = {
    payload: TypeTodo,
    type: string
};
export default function users(state: IState = initialState, action: TypeAction) {
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


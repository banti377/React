import { DEC, INC } from "./constant";


export const countReducer = (state = { x: 0 }, action) => {
    switch (action.type) {
        case INC:
            return { x: state.x + 1 }
        case DEC:
            return { x: state.x - 1 }

        default:
            return state
    }
}
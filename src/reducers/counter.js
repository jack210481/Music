import { ADD, MINUS } from '../constants/counter'

const INITIAL_STATE = {
    num: []
}

export default function counter (state = INITIAL_STATE, action) {
    switch (action.type) {
        case ADD:
            return {
                ...state,
                num: action.payload
            }
        case MINUS:
            return {
                ...state,
                num: state.num - 1
            }
        default:
            return state
    }
}

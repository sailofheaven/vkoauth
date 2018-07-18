import {
    AUTH_SUCCES,
    AUTH_FAIL,
    GET_FRIENDS
} from '../actions/actions'

const initialState = {
    friends: [],
    name: '',
    error: ''
}

export default function user(state = initialState, action) {

    switch (action.type) {
        case AUTH_SUCCES:
            return { ...state, name: action.payload, error: '' }

        case AUTH_FAIL:
            return { ...state, error: action.payload.message }

        case GET_FRIENDS:
            return { ...state, friends: action.payload }

        default:
            return state
    }

}
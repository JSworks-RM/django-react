import { USER_LOADING, USER_LOADED, AUTH_ERROR } from '../actions/actionTypes'

const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    isLoading: false,
    user: null
}

export default function (state = initialState, action) {
        switch (action.type) {
            case USER_LOADING:
                return {
                    ...state,
                    isLoading: true
                }
            case USER_LOADED:
                return {
                    ...state,
                    isAuthenticated: true,
                    isLoading: false,
                    user: action.payload
                }
            case AUTH_ERROR: // Remove token from localStorage
                localStorage.removeItem('token')
                return {
                    ...state,
                    isAuthenticated: null,
                    isLoading: false,
                    user: null,
                    token: null
                }
            default:
                return state
        }
    }

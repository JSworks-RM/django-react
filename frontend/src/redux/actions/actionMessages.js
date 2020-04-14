import { CREATE_MESSAGES, GET_ERRORS } from './actionTypes'

export const createMessage = msg => {
    return {
        type: CREATE_MESSAGES,
        payload: msg
    }
}

// CREATE RETURN ERRORS
export const returnErrors = (msg, status) => {
    return {
        type: GET_ERRORS,
        payload: { msg, status }
    }
}
import { CREATE_MESSAGES } from './actionTypes'

export const createMessage = msg => {
    return {
        type: CREATE_MESSAGES,
        payload: msg
    }
}
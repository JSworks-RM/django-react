import { GET_LEADS, DELETE_LEAD, ADD_LEAD } from '../actions/actionTypes'

const initialState = {
    leads: [] // List where we fetch leads data
}

// Creating reducer
export default function (state = initialState, action) {
    switch(action.type) {
        case GET_LEADS:
            return {
                ...state,
                leads: action.payload // Will be fetching from server
            }
        case DELETE_LEAD:
            return {
                ...state,
                leads: state.leads.filter(lead => lead.id !== action.payload)
            }
        case ADD_LEAD:
            return {
                ...state,
                leads: [...state.leads, action.payload]
            }
        default:
            return state
    }
}

// Now we need the lead action
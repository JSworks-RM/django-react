import { combineReducers } from 'redux'
import leadsReducer from './leadsReducer'
import errorsReducer from './errorsReducer'
import messagesReducers from './messagesReducer'
import authReducer from './authReducer'

export default combineReducers ({
    // Object to pass any reducers we have
    leadsReducer: leadsReducer,
    errorsReducer,
    messagesReducers,
    authReducer
})
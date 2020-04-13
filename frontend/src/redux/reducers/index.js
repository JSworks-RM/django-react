import { combineReducers } from 'redux'
import leadsReducer from './leadsReducer'
import errorsReducer from './errorsReducer'

export default combineReducers ({
    // Object to pass any reducers we have
    leadsReducer: leadsReducer,
    errorsReducer
})
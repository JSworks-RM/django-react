import { combineReducers } from 'redux'
import leadsReducer from './leadsReducer'

export default combineReducers ({
    // Object to pass any reducers we have
    leadsReducer: leadsReducer
})
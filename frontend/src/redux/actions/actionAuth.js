import axios from 'axios'
import { returnErrors } from './actionMessages'

import {
    USER_LOADING,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    REGISTER_SUCCESS,
    REGISTER_FAIL
} from './actionTypes'


// CHECK & LOAD USER
export const loadUser = () => (dispatch, getState) =>{
    // User loading
    dispatch ({
        type: USER_LOADING
    })

    // Now we are ready to create our request to get or load the user
    axios.get('/api/auth/user', tokenConfig(getState))
        .then(res => {
            dispatch({
                type: USER_LOADED,
                payload: res.data
            })
        })
        .catch(err => {
            // Dispatch returnError just to put errors into the state. 
            // we alse gonna call AUTH_ERROR to fire that action if we are not login to set defaults state 
            dispatch (returnErrors(err.response.data, err.response.status))
            dispatch ({
                type: AUTH_ERROR
            })
        })
}

// All we have done is to create loadUser and we are not actually calling it now.
// We want to get or load all this loadUser pretty much all the time so we go to bring this action in the main app
// In order to call it there it will be after DOM have loaded using componentDidMount()


// ********************* LOGIN FUNTION *********************
// We need to get username and password in order to validate it againts the backend
export const login = (username, password) => (dispatch) =>{

    // Header payload 
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    // Request body. Turn it out into a json 
const body = JSON.stringify({ username, password })

    // Post request to login
    axios.post('/api/auth/login', body, config)
        .then(res => {
            dispatch({
                type: LOGIN_SUCCESS,
                payload: res.data
            })
        })
        .catch(err => {
            // Dispatch returnError just to put errors into the state. 
            // we alse gonna call AUTH_ERROR to fire that action if we are not login to set defaults state 
            dispatch (returnErrors(err.response.data, err.response.status))
            dispatch ({
                type: LOGIN_FAIL
            })
        })
}

// ********************* REGISTER FUNTION *********************
// We need to get username and password in order to validate it againts the backend
export const register = ({ username, password, email }) => (dispatch) =>{

    // Header payload 
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    // Request body. Turn it out into a json 
const body = JSON.stringify({ username, password, email })

    // Post request to login
    axios.post('/api/auth/register', body, config)
        .then(res => {
            dispatch({
                type: REGISTER_SUCCESS,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status));
            dispatch ({
                type: REGISTER_FAIL
            })
        })
}

// ********************* LOGOUT FUNTION *********************
export const logout = () => (dispatch, getState) =>{

    // Now we are ready to create our request to get or load the user
    axios.post('/api/auth/logout/', null,  tokenConfig(getState))
        .then(res => {
            dispatch({
                type: LOGOUT_SUCCESS
            })
        })
        .catch(err => {
            // Dispatch returnError just to put errors into the state. 
            // we alse gonna call AUTH_ERROR to fire that action if we are not login to set defaults state 
            dispatch (returnErrors(err.response.data, err.response.status))
        })
}


// 4. Setup config with token / Helper function
export const tokenConfig = getState => {
    // GET TOKEN FROM STATE OF AUTH REDUCER
    const token = getState().authReducer.token

    // Header payload 
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    // If token, add to headers config
    if (token) {
        config.headers['Authorization'] = `token ${token}`
    }

    return config
}

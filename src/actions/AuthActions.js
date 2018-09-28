import axios from 'axios';
import { apiUrl } from '../constants/APIConstants';

const authApiUrl = `${apiUrl}/session`;

const authActions = {
    login,
    logout
}

export default authActions;

function login(fbId) {
    return (dispatch) => {
        dispatch(request);
        axios.post(authApiUrl, {facebook_token: fbId})
             .then(auth => {
                dispatch(success(auth));
             })
             .catch(error => {
                dispatch(failure(error))
             });

    };

    request = (auth) => { return {type: authConstants.LOGIN_REQUEST, auth } };
    success = (auth) => { return {type: authConstants.LOGIN_SUCCESS, auth } };
    failure = (auth) => { return {type: authConstants.LOGIN_FAILURE, auth } };
}

function logout() {
    return (dispatch) => {
        dispatch(request());
        axios.delete(authApiUrl)
             .then(auth => {
                dispatch(success(auth));
             })
             .catch(error => {
                dispatch(failure(error));
             });

    }
    
    request = (auth) => { return {type: authConstants.LOGOUT_REQUEST, auth } };
    success = (auth) => { return {type: authConstants.LOGOUT_SUCCESS, auth } };
    failure = (auth) => { return {type: authConstants.LOGOUT_FAILURE, auth } };
}


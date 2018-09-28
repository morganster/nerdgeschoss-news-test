import axios from 'axios';
import { apiUrl } from '../constants/APIConstants';
import authConstants from '../constants/AuthConstants';
import linkActions from './LinkActions';

const authApiUrl = `${apiUrl}/session`;

const authActions = {
    login,
    logout
};

export default authActions;

function login(fbId) {
    return (dispatch) => {

        dispatch(request);
        
        axios.post(authApiUrl, {'facebook_token': fbId})
             .then(auth => {
                dispatch(success(auth)).then(dispatch(linkActions.getLinks()));
             })
             .catch(error => {
                dispatch(failure(error));
             });

    };

    function request (auth) { return {type: authConstants.LOGIN_REQUEST, auth }; }
    function success (auth) { return {type: authConstants.LOGIN_SUCCESS, auth }; }
    function failure(auth){ return {type: authConstants.LOGIN_FAILURE, auth }; }
}

function logout() {
    return (dispatch, getState) => {
        const config = {
            headers: {
                Authorization: `bearer ${getState().auth.bearer}`
            }
        };
        dispatch(request());
        axios.delete(authApiUrl,config)
             .then(auth => {
                dispatch(success(auth));
             })
             .catch(error => {
                dispatch(failure(error));
             });

    };
    
    function request (auth) { return {type: authConstants.LOGOUT_REQUEST, auth }; }
    function success (auth) { return {type: authConstants.LOGOUT_SUCCESS, auth }; }
    function failure(auth) { return {type: authConstants.LOGOUT_FAILURE, auth }; }
}


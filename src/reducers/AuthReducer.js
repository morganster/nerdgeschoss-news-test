import AuthConstants from '../constants/AuthConstants';

const initialState = {
    requesting: false,
    bearer: null,
    loggedIn: false,
};

export function auth(state = initialState, action) {
    switch (action.type) {
        case AuthConstants.LOGIN_REQUEST:
            return { ...state, ...{ 
                requesting: true,
           }};
        case AuthConstants.LOGIN_SUCCESS:
            return { ...state, ...{
                requesting: false,
                bearer: action.auth,
                loggedIn: true,
            }};
        case AuthConstants.LOGIN_FAILURE:
            return {...state,...{
                requesting: false
            }};
        case AuthConstants.LOGOUT_REQUEST:
            return { ...state, ...{ 
                requesting: true,
           }};
        case AuthConstants.LOGOUT_SUCCESS:
            return { ...state, ...{
                requesting: false,
                bearer: initialState.bearer,
                loggedIn: false,
            }};
        case AuthConstants.LOGOUT_FAILURE:
            return { ...state,...{
                requesting: false
            }};
        default:
            return state;
    }
}
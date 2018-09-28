import { combineReducers } from 'redux';
import { links } from './LinkReducer';
import { auth } from './AuthReducer';

const rootReducer = combineReducers({
    links,
    auth
});

export default rootReducer;
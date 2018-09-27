import { combineReducers } from 'redux';
import { links } from './LinkReducer';

const rootReducer = combineReducers({
    links,
});

export default rootReducer;
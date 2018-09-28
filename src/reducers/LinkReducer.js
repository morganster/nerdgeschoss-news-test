import linkConstants from '../constants/LinkConstants';
import * as _ from 'lodash';

const initialState = {
    requesting: false,
    links: [],
    link: {}
};

export function links(state = initialState, action) {
    switch (action.type) {
        case linkConstants.GET_ALL_REQUEST:
            return { ...state, ...{
                requesting: true,
           }};
        case linkConstants.GET_ALL_SUCCESS:
            return { ...state, ...{
                requesting: false,
                links: action.links.data
            }};
        case linkConstants.GET_ALL_FAILURE:
            return { ...state,...{
                requesting: false,
                links: initialState.linkList
            }};
        case linkConstants.LIKE_REQUEST:
            return { ...state, ...{
                requesting: true,
           }};
        case linkConstants.LIKE_SUCCESS:
            state.links[_.findKey(state.links, {id:action.like.id})].liked = true;
            return { ...state, ...{
                requesting: false,
                links:  state.links
            }};
        case linkConstants.LIKE_FAILURE:
            return { ...state,...{
                requesting: false,
            }};
        case linkConstants.UNLIKE_REQUEST:
            return { ...state, ...{
                requesting: true,
           }};
        case linkConstants.UNLIKE_SUCCESS:
            state.links[action.link].liked = false;
            return { ...state, ...{
                requesting: false,
                links: state.links
            }};
        case linkConstants.UNLIKE_FAILURE:
            return { ...state,...{
                requesting: false,
            }};
        case linkConstants.GET_REQUEST:
            return { ...state, ...{
                requesting: true,
           }};
        case linkConstants.GET_SUCCESS:
            return { ...state, ...{
                requesting: false,
                link: action.links.data
            }};
        case linkConstants.GET_FAILURE:
            return { ...state,...{
                requesting: false,
            }};
        default:
            return state;
    }
}
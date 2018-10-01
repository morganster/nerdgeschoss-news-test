import linkConstants from '../constants/LinkConstants';
import * as _ from 'lodash';
let moment = require("moment");
if ("default" in moment) {
    moment = moment["default"];
}

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
                links: _.chain(_.orderBy(action.links.data,['like_count'],['desc']))
                .groupBy(x => moment(x.created_at).format('Y-MM-DD'))
                .map((value, key) => ({date: key, links: value}))
                .orderBy(['date'],['desc'])
                .value()
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
            return { ...state, ...{
                requesting: false,
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
            return { ...state, ...{
                requesting: false,
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
        case linkConstants.DELETE_REQUEST:
            return { ...state, ...{
                requesting: true,
           }};
        case linkConstants.DELETE_SUCCESS:
            return { ...state, ...{
                requesting: false,
            }};
        case linkConstants.DELETE_FAILURE:
            return { ...state,...{
                requesting: false,
            }};
        default:
            return state;
    }
}
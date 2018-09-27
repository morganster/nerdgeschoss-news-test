import linkConstants from '../constants/LinkConstants';

const initialState = {
    requesting: false,
    linkList: {
        data: []
    }
};

export function links(state = initialState, action) {
    switch (action.type) {
        case linkConstants.GET_ALL_REQUEST:
            return Object.assign({}, state,{
                requesting: true,
                linkList: initialState.linkList
           });
        case linkConstants.GET_ALL_SUCCESS:
            return Object.assign({}, state,{
                requesting: false,
                linkList: action.links
            });
        case linkConstants.GET_ALL_FAILURE:
            return Object.assign({}, state,{
                requesting: false,
                linkList: initialState.linkList
            });
        default:
            return state;
    }
}
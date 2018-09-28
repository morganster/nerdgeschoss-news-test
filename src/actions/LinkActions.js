import axios from 'axios';
import linkConstants from '../constants/LinkConstants';
import { apiUrl } from '../constants/APIConstants';

const linksApiUrl = `${apiUrl}/links`;
const linkActions = {
    getLinks,
    deleteLink,
    getLink,
    saveLink,
    likeLink,
    unLikeLink
};

export default linkActions;

function getLinks() {

    return (dispatch, getState) => {
        let config = {
            headers: {}
        };
        if(getState().auth.bearer){
            config.headers.Authorization = `bearer ${getState().auth.bearer}`;
        }
        dispatch(request());

        axios.get(linksApiUrl, config)
            .then(
                links => {
                    dispatch(success(links));
                })
            .catch(error => {
                dispatch(failure(error));
            });
    };

    function request(links) { return { type: linkConstants.GET_ALL_REQUEST, links }; }

    function success(links) { return { type: linkConstants.GET_ALL_SUCCESS, links }; }

    function failure(error) { return { type: linkConstants.GET_ALL_FAILURE, error }; }
}

function getLink(id) {

    return (dispatch) => {
        dispatch(request());

        axios.get(`${linksApiUrl}/${id}`)
            .then(
                links => {
                    dispatch(success(links));
                },
                error => {
                    dispatch(failure(error));
                });
    };

    function request(links) { return { type: linkConstants.GET_ALL_REQUEST, links }; }

    function success(links) { return { type: linkConstants.GET_ALL_SUCCESS, links }; }

    function failure(error) { return { type: linkConstants.GET_ALL_FAILURE, error }; }
}

function saveLink(params) {

    return (dispatch) => {
        dispatch(request());

        axios.post(linksApiUrl, params)
            .then(
                links => {
                    dispatch(success(links));
                },
                error => {
                    dispatch(failure(error));
                });
    };

    function request(links) { return { type: linkConstants.GET_ALL_REQUEST, links }; }

    function success(links) { return { type: linkConstants.GET_ALL_SUCCESS, links }; }

    function failure(error) { return { type: linkConstants.GET_ALL_FAILURE, error }; }
}

function deleteLink(id) {

    return (dispatch) => {
        dispatch(request());

        axios.delete(`${linksApiUrl}/${id}`)
            .then(
                links => {
                    dispatch(success(links));
                },
                error => {
                    dispatch(failure(error));
                });
    };

    function request(links) { return { type: linkConstants.GET_ALL_REQUEST, links }; }

    function success(links) { return { type: linkConstants.GET_ALL_SUCCESS, links }; }

    function failure(error) { return { type: linkConstants.GET_ALL_FAILURE, error }; }
}

function likeLink(id) {
    console.log('like a link',id);
    return (dispatch, getState) => {
        const config = {
            headers: {
                Authorization:`bearer ${getState().auth.bearer}`
            }
        };

        dispatch(request());

        axios.post(`${linksApiUrl}/${id}/like`,null,config)
            .then(
                data => {
                    dispatch(success({data, id}));
                },
                error => {
                    dispatch(failure(error));
                });
    };

    function request(like) { return { type: linkConstants.LIKE_REQUEST, like }; }

    function success(like) { return { type: linkConstants.LIKE_SUCCESS, like }; }

    function failure(error) { return { type: linkConstants.LIKE_FAILURE, error }; }
}

function unLikeLink(id) {

    return (dispatch) => {
        dispatch(request());

        axios.delete(`${linksApiUrl}/${id}/like`)
            .then(
                links => {
                    dispatch(success(links));
                },
                error => {
                    dispatch(failure(error));
                });
    };

    function request(links) { return { type: linkConstants.GET_ALL_REQUEST, links }; }

    function success(links) { return { type: linkConstants.GET_ALL_SUCCESS, links }; }

    function failure(error) { return { type: linkConstants.GET_ALL_FAILURE, error }; }
}

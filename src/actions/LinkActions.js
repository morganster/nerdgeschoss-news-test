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

    return (dispatch, getState) => {
        const config = {
            headers: {
                Authorization:`bearer ${getState().auth.bearer}`
            }
        };

        dispatch(request());

        axios.post(linksApiUrl, params, config)
            .then(
                links => {
                    dispatch(success(links));
                    dispatch(getLinks());
                },
                error => {
                    dispatch(failure(error));
                });
    };

    function request(link) { return { type: linkConstants.SAVE_REQUEST, link }; }

    function success(link) { return { type: linkConstants.SAVE_SUCCESS, link }; }

    function failure(error) { return { type: linkConstants.SAVE_FAILURE, error }; }
}

function deleteLink(id) {

    return (dispatch, getState) => {
        const config = {
            headers: {
                Authorization:`bearer ${getState().auth.bearer}`
            }
        };

        dispatch(request());

        axios.delete(`${linksApiUrl}/${id}`, config)
            .then(
                deletedLink => {
                    dispatch(success(deletedLink));
                    dispatch(getLinks());
                },
                error => {
                    dispatch(failure(error));
                });
    };

    function request(deletedLink) { return { type: linkConstants.DELETE_REQUEST, deletedLink }; }

    function success(deletedLink) { return { type: linkConstants.DELETE_SUCCESS, deletedLink }; }

    function failure(error) { return { type: linkConstants.DELETE_FAILURE, error }; }
}

function likeLink(link) {
    return (dispatch, getState) => {
        const config = {
            headers: {
                Authorization:`bearer ${getState().auth.bearer}`
            }
        };

        dispatch(request());

        axios.post(`${linksApiUrl}/${link.id}/like`,null,config)
            .then(
                data => {
                    dispatch(success({data, link}));
                    dispatch(getLinks());
                },
                error => {
                    dispatch(failure(error));
                });
    };

    function request(like) { return { type: linkConstants.LIKE_REQUEST, like }; }

    function success(like) { return { type: linkConstants.LIKE_SUCCESS, like }; }

    function failure(error) { return { type: linkConstants.LIKE_FAILURE, error }; }
}

function unLikeLink(link) {

    return (dispatch, getState) => {
        const config = {
            headers: {
                Authorization:`bearer ${getState().auth.bearer}`
            }
        };
        dispatch(request());

        axios.delete(`${linksApiUrl}/${link.id}/like`, config)
            .then(
                data => {
                    dispatch(success({data, link}));
                    dispatch(getLinks());
                },
                error => {
                    dispatch(failure(error));
                });
    };

    function request(like) { return { type: linkConstants.UNLIKE_REQUEST, like }; }

    function success(like) { return { type: linkConstants.UNLIKE_SUCCESS, like }; }

    function failure(error) { return { type: linkConstants.UNLIKE_FAILURE, error }; }
}

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

    return (dispatch) => {
        dispatch(request());

        console.log(axios.defaults);

        axios.get(linksApiUrl)
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

    return (dispatch) => {
        dispatch(request());

        axios.post(`${linksApiUrl}/${id}/like`)
            .then(
                links => {
                    dispatch(success(links));
                },
                error => {
                    dispatch(failure(error));
                });
    };

    function request(links) { return { type: linkConstants.LIKE_REQUEST, links }; }

    function success(links) { return { type: linkConstants.LIKE_SUCCESS, links }; }

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

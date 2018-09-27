import axios from 'axios';
import linkConstants from '../constants/LinkConstants';

const linkUrl = 'http://jsonplaceholder.typicode.com/posts';
const linkActions = {
    getLinks,
};

export default linkActions;

function getLinks() {

    return (dispatch) => {
        dispatch(request());

        axios.get(linkUrl)
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

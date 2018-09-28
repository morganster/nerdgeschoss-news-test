import axios from 'axios';

export const configAxios = () => {
    axios.defaults.headers = {
        accept: '*/*'
    };
};

import axios from "axios";

export const getCharacterRequest = (url) => {
    return axios(url, {
        method: 'GET'
    });
};
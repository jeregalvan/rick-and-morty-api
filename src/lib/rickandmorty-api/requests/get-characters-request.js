import axios from "axios";

export const getCharactersRequest = () => {
    return axios('https://rickandmortyapi.com/api/character',{
        method: 'GET'
    });
};
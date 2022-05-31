import { useState } from 'react'; 
import { getCharactersRequest } from '../../lib/rickandmorty-api/requests/get-characters-request';
import { getCharacterRequest } from '../../lib/rickandmorty-api/requests/get-character-request';


export const useCharacters = () => {
    const [loading, setLoading] = useState(true);
    const [characterListError, setCharacterListError] =useState("");

    const getCharacters = async () => {
        try{
            const characterResponse = await getCharactersRequest(); 
            setLoading(false);
            return characterResponse; 
        }catch(error){
            setCharacterListError(error);
            setLoading(false);
      
        }
    };

    const getCharacter = async (url) => {
        try{
            const characterResponse = await getCharacterRequest(url); 
            setLoading(false);
            return characterResponse; 
        }catch(error){
            setCharacterListError(error);
            setLoading(false);
      
        }
    }

    return {
        getCharacters,
        getCharacter,
        loading,
        characterListError
    }
}
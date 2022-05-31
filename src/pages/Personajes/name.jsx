import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import HeadingH1 from '../../components/Text/Headings/HeadingH1/HeadingH1';
import { useCharacters } from "../../services/character/character-services";

const CharacterDetail = () => {
    const params = useParams();
    const charactersService = useCharacters();
    const [selectedCharacter, setSelectedCharacter] = useState({});
    const [error, setError] = useState("");

    const getCharacterInfo = async (url) => {
        try{
            const characterRequest = await charactersService.getCharacter(url);
            const character = await characterRequest.data;
            setSelectedCharacter(character);
        }catch(error){
            setError("Ooops, something goes wrong....")
        }
        
    }

    useEffect(() => {
        getCharacterInfo(`https://rickandmortyapi.com/api/character/${params.name}`);
    }, []);

    if(!selectedCharacter.hasOwnProperty('abilities')){
       
        
        return (
            <div>
            <h2>Habilidad</h2>
            <HeadingH1 text={`${selectedCharacter.name}${selectedCharacter.order}`}/>
            {
                selectedCharacter.abilities.map((item, index) => (
                    
                    <p>{item.status.name}</p>
                    ))
            }
        </div>
    )
}
} 

export default CharacterDetail;
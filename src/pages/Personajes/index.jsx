import React, { useState, useEffect, useRef } from 'react';

//Assets
import bannerDos from '../../assets/images/banner2.png';

// Styled Component
import IndexContainer from './index-style';

//Components
import Header from '../../containers/Header/Header';
import HeroPersonajes from '../../containers/Hero/HeroPersonajes-style';
import HeadingH1 from '../../components/Text/Headings/HeadingH1/HeadingH1';
import Section from '../../containers/Section/Section'; 
import HeadingH2 from '../../components/Text/Headings/HeadingH2/HeadingH2';
import CharacterList from '../../containers/CharacterList/CharacterList';
import PersonajeCard from '../../components/PersonajeCarta/PersonajeCarta';
import MainModal from '../../containers/MainModal/MainModal';
import ModalContent from '../../containers/MainModal/ModalContent';
import Paginacion from '../../components/Paginacion/Paginacion';

//Hooks
import { useModal } from '../../hooks/use-modal';
import { useCharacters } from '../../services/character/character-services';


function Characters() {

  const { handleModal, modalOpened } = useModal();
  const characterService = useCharacters();
  
  const [characterList, setCharacterList] = useState([]);
  const [selectedCharacter, setSelectedCharacter] = useState({});
  const [searchedCharacter, setSearchedCharacter] = useState([]);
  

  const searchBar = useRef(null);


  useEffect(() => {
    const getCharacterList = async () => {
      const characters = await characterService.getCharacters();
      const result = await characters.data;
      setCharacterList(result);
    }
    getCharacterList();
  },[])

  const handleCharacter = async (url) => {
    const character = await characterService.getCharacter(url);
    const characterInfo = await character.data;
    setSelectedCharacter(characterInfo);
    handleModal(true)
  }

  const handleSearch = () => {
    const searchedValue = searchBar.current.value.toLowerCase();
    const filteredCharacter = characterList.filter(character => character.name.toLowerCase().includes(searchedValue));
    setSearchedCharacter(filteredCharacter);
  }

  const handleCharacterPagination = async (url) =>{
    const character = await characterService.getCharacter(url);
    const result = await character.data;
    setCharacterList(result);
  };

  return (
    <>
     <IndexContainer>

      <Header />
      <HeroPersonajes backgroundd={bannerDos}>
        <HeadingH1 
          text="Aquí están todos los personajes"
          color="#ffffff"
          colorHover="#000000"
          />
          <div className="buscador">
          <input 
            ref={searchBar} 
            type="text" 
            placeholder="Buscar"
            onChange={(e) => handleSearch(e)}
            />
        </div>
      </HeroPersonajes>
      <Section>
        <HeadingH2 text="Personajes" />
        { 
          characterService.loading && <span>Estoy descargando la lista</span>
        }
        {
          characterService.characterListError !== "" && <span>{characterService.characterListError}</span>
        }
        
        <CharacterList>
        {
             characterList.results && characterList.results.map((character, index) => {
              return (
                <li key={index}>
                  <PersonajeCard 
                    image={character.image}
                    name={character.name}
                    handleClick={() => handleCharacter(character.url)}
                    />
                </li>
              )
            })
          }
        </CharacterList>
  
       { 
         characterList.info && <Paginacion
          prevUrl={characterList.info.prev}
          nextUrl={characterList.info.next}
          onClick={(url)=>handleCharacterPagination(url)}
        />
      }
      </Section>
      {
        modalOpened && (
          <MainModal handleClick={() => handleModal(false)}>
            {
              <ModalContent
              name={ selectedCharacter.name }
              image={selectedCharacter.image}
              status={ selectedCharacter.status }
              gender={ selectedCharacter.gender }
              location={ selectedCharacter.location[`name`]}
              origin={ selectedCharacter.origin[`name`]}
              species={ selectedCharacter.species }                
            >
            </ModalContent>
            }
          </MainModal> 
          )
        }
      
        </IndexContainer>
    </>
  );
}

export default Characters;

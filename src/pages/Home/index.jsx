import React, { useState, useEffect, useRef, useContext } from 'react';


//Assets
import banner from '../../assets/images/banner1.jpg';
//Styled-component
import HomeContainer from './home-style'; 

//Components
import Header from '../../containers/Header/Header';
import Hero from '../../containers/Hero/Hero';
import HeadingH1 from '../../components/Text/Headings/HeadingH1/HeadingH1';
import Section from '../../containers/Section/Section';
import HeadingH2 from '../../components/Text/Headings/HeadingH2/HeadingH2';
import CharacterList from '../../containers/CharacterList/CharacterList';
import PersonajeCard from '../../components/PersonajeCarta/PersonajeCarta';
import MainModal from '../../containers/MainModal/MainModal';
import ModalContent from '../../containers/MainModal/ModalContent';
import { Link } from 'react-router-dom';

//Hooks
import { useModal } from '../../hooks/use-modal';
import { useCharacters } from '../../services/character/character-services';


function Home() {

  const { handleModal, modalOpened } = useModal();
  const characterService = useCharacters();

  const [characterList, setCharacterList] = useState([]);
  const [searchedCharacter, setSearchedCharacter] = useState([]);
  
  const [selectedCharacter, setSelectedCharacter] = useState({});

  const searchBar = useRef(null);


  useEffect(() => {
    const getCharacterList = async () => {
      const characters = await characterService.getCharacters();
      const { results } = await characters.data;
      setCharacterList(results);
      setSearchedCharacter(results.slice(0,6));
    }
    getCharacterList();
  }, []);

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


  
  return (
    <HomeContainer background={banner}>
      <Header 
  
      />
      <Hero>
        <HeadingH1 
          text="Rick and Morty"
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
      </Hero>
      <Section>
        <HeadingH2 text="Personajes destacados" />
        {
          characterService.loading && <span>Estoy descargando la lista</span>
        }
        {
          characterService.characterListError !== "" && <span>{characterService.characterListError}</span>
        }
        <CharacterList className="lista"> 
          {
            searchedCharacter.map((character, index) => {
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
        <div id="enlacePersonajes">
        <Link id="personajes" to="/Personajes">Ver más personajes</Link>
        </div>
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
      
    </HomeContainer>
  );
}

export default Home;

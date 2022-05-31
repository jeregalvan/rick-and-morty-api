import React from "react";

//Styled-components
import CharacterListContainer from "./CharacterList-style";

const CharacterList = ({children}) => {
    return (
        <CharacterListContainer>
            {children}
        </CharacterListContainer>
    );
};

export default CharacterList;
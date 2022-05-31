import React from "react";
import PersonajeCartaContainer from "./PersonajeCarta-style";

const PersonajeCarta = ({name, handleClick,image}) => {
    return (
        <PersonajeCartaContainer onClick={() => handleClick()}>
            <img src={image} alt="" />
            <h3>{name}</h3>
            
        </PersonajeCartaContainer>
    );
};

export default PersonajeCarta;
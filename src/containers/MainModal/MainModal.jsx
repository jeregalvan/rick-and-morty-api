import React from "react";
 
//Styled-components
import MainModalContainer from "./MainModal-style";

const MainModal = ({children, handleClick}) => {
    return (
        <MainModalContainer>
            <div className="modal-wrapper">
                <div className="tob-bar">
                    <h1>Detalles personaje</h1>
                    <span onClick={() => handleClick()}>X</span>
                </div>
                {children}
            </div>
        </MainModalContainer>
    );
};

export default MainModal;
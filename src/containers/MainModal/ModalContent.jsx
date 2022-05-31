import React from "react";

//styled-components 
import ModalContentContainer from "./ModalContent-Style";

const ModalContent = ({ id, name, image, status, species, gender, origin, location}) => {
    return(
        <ModalContentContainer> 
            <h2>{ name }</h2>
            <img src={ image } alt="" />
            {(() => {
          if (status === "Dead") {
            return <div className="muerto">{status}</div>;
          } else if (status === "Alive") {
            return <div className="vivo">{status}</div>;
          } else {
            return <div className="desconocido">{status}</div>;
          }
        })()}
            <div className="content">
          <div>
            <span className="contenido">Genero: </span>
            {gender}
          </div>
          <div>
            <span className="contenido">Ultima vez visto: </span>
            {location}
          </div>
          <div>
            <span className="contenido">Origen: </span>
            {origin}
          </div>
          <div>
            <span className="contenido">Especie: </span>
            {species}
          </div>
        </div>                          
       </ModalContentContainer>
    );
};

export default ModalContent;
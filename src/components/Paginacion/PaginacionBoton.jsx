import React from "react";
import PaginacionBotonContainer from "./PageButton";

const PaginacionBoton = ({children}) =>{
    return(
        <PaginacionBotonContainer>
            {children}
        </PaginacionBotonContainer>     
    );
};

export default PaginacionBoton;
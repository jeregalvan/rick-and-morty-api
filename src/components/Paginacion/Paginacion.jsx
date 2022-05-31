import React from "react";
import Navegacion from "./Paginacion-style";
import PaginacionBoton from "./PaginacionBoton";

const Paginacion = ({prevUrl, nextUrl, onClick }) => {



    return (
        <Navegacion> 
            {
                prevUrl !== null && <PaginacionBoton onClick={()=>onClick(prevUrl)}>Prev</PaginacionBoton>
                
            }
            {
                nextUrl !== null && <PaginacionBoton onClick={()=>onClick(nextUrl)}>Next</PaginacionBoton>
            } 
        </Navegacion>
    )
}

export default Paginacion;


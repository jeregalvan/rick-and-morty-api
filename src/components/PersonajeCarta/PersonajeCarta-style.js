import styled from "styled-components";

const PersonajeCartaContainer = styled.article`
    width: 100%;
    width: 309px;
    height: 309px;
    padding: 10px;
    cursor: pointer;
    margin: 20px;
    position: relative;
    h3{
        min-width:309px;
        font-size: 24px;
        line-height: 48px;
        color:black;
        position: absolute;
        top:83%;
        background-color: white;
        border-radius: 0 0 15px 15px;
    }
    img{
        width: 100%;
        height: 100%
        border: solid 1px black;
        border-radius: 15px;

    }
    
`;

export default PersonajeCartaContainer;
import styled from "styled-components";

const HeroPersonajes = styled.section`
    width: 100%;
    min-height: 90vh;
    background: url(${(props)=>props.backgroundd}) no-repeat center center / cover;
    display:flex;
    justify-content: flex-end;
    align-items:center;  
    flex-direction: column;
    h1{
        margin-bottom: 60px;
        color:#04CBD2;
    }
`;

export default HeroPersonajes;
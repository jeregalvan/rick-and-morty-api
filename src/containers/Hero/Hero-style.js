import styled from "styled-components";

const HeroContainer = styled.section`
    width: 100%;
    min-height: 90vh;
    background: url(${(props)=>props.background}) no-repeat center center / cover;
    display:flex;
    justify-content: flex-end;
    align-items:center;
    flex-direction: column;
    h1{
        color:#04CBD2;
        margin-bottom: 60px;
    }
`;

export default HeroContainer;
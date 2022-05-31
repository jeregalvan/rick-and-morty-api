import styled from "styled-components";

const HeaderContainer = styled.header`
    width: 100%;
    top:0;
    opacity: 0.8;
    z-index: 999;
    box-shadow: 0 0 10px rgba(0, 0, 0, .2);
    position: fixed;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: solid 1px black;
    background-color: white;
    a{
        margin: 0 15px 0 15px;
        color: black;
        font-size: 1.4rem;
    }
    a:last-child{
        margin-right: 30px;
    }
    span{
        cursor: pointer;
    }
`;

export default HeaderContainer;
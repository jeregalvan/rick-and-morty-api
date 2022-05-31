import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Creepster&display=swap');

    *{
        margin: 0;
        padding: 0;
        box-sixing: border-box;
        font-family: 'Creepster', cursive;
        font-weight: Regular 400;
    }

    html{
        background-color: #35383C;
    }
    img{
        max-width: 100%;
    }

    li{
        list-style: none;
    }

    a{
        text-decoration: none;
    }
`;

export default GlobalStyle;
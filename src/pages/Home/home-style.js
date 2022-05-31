import styled from "styled-components";


const HomeContainer = styled.div`

    .buscador{ 
       margin-bottom: 60px;
       opacity: 0.8;
        input{
            width:500px;
            padding:20px;
            border-radius:40px;
            font-size: 1.2rem;
        }
    }
    ul{
        display:flex;
        justify-content:center;
        align-items:center;
    }
    div#enlacePersonajes{
        padding:100px 0 60px;
        display:flex;
        justify-content:center;
        a#personajes{
            text-decoration:none;
            color:white;
            background-color:#535A63;
            padding:20px;
            border-radius:30px;
        }
    }
`;

export default HomeContainer;
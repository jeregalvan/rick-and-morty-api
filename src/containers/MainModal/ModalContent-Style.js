import styled from "styled-components";

const ModalContentContainer = styled.div`
display: flex;
align-items: center;
justify-content: flex-start;
flex-direction: column;
widht:100%;
height:100%;
font-size: 1.2rem;
h2{
    font-size: 2.4rem;
    margin-bottom: 20px;
    text-align:center;    
    letter-spacing: 1px;
}
div.content{
    width:100%;
    height:100%;
    overflow: auto;        
    text-align:left;
    
}
div.muerto{
    width:300px;
    height: 100px;
    margin: 15px 0 10px;
    font-size: 2rem;
    border-radius: 5px;
    background-color: crimson;
    color:white;
}
div.vivo{
    width:300px;
    height: 100px;
    margin: 15px 0 10px;
    font-size: 2rem;
    border-radius: 5px;
    background-color: green;
    color:white;
}
div.desconocido{
    width:300px;
    height: 100px;
    margin: 15px 0 10px;
    font-size: 2rem;
    border-radius: 5px;
    background-color: gray;
    color:white;
}
span{
    margin:auto 0;
    color: black;
    font-size: 1.3rem;
    line-height:2rem;
    font-weight:bold;
}

`;

export default ModalContentContainer;
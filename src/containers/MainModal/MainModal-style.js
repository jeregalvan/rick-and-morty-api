import styled from "styled-components";

const MainModalContainer = styled.div`
position: fixed;
top: 0;
left: 0;
z-index: 9999;
width: 100vw;
height: 100vh;
background-color: rgba(0,0,0,0.7);
display: flex;
justify-content: center;
align-items: center;    
overflow:hidden;
.modal-wrapper{
    display:flex;
    justify-content: flex-start;
    align-items:center;
    flex-direction: column;
    box-sizing:border-box;        
    background-color:white;
    text-align: center; 
    width: 100%;
    height: 100vh;
    padding: 50px;
    .tob-bar{
        z-index:1;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width:100%;
        color: white;
        letter-spacing: 2px;
        span{
            color: black;
            font-size:2rem;
            text-align: left;
            cursor:pointer;
            padding:5px 15px;
            border-radius: 8px;
        }
    }
}
`;

export default MainModalContainer;
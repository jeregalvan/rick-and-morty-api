import styled from "styled-components";
 

const ContactContainer = styled.section`
    width: 100%;
    min-height: 100vh;
    background: url(${(props)=>props.backgrounddd}) no-repeat center center / cover;
    div{
        display:flex;
        justify-content:center;
        align-items:center;
    }
    div.titulo{
        width:90%;
        display:flex;
        justify-content:left;
        h1{
            margin-top:100px;
            font-size:4.5rem;
            color: #ffffff;
        }
    }
    div.form{
        width:100%;
        display:flex;
        justify-content:center;
        align-items:center;
        flex-direction:column;

        
       
        form{
            width:40%;
            flex-direction: row;
            
        }
        input{
            width:100%;
            padding:15px 20px;
            border-radius:40px;
            font-size: 1.2rem;
            margin: 10px 0;
            opacity: 0.8;
        }
        textarea{
            width:100%;
            padding: 0 20px;
            margin-bottom:50px;
            font-size: 1.2rem;
            border-radius:30px;
            opacity: 0.8;
        }
        span{
            display:flex;
            justify-content:center;
            cursor:pointer;            
            width:150px;
            padding:20px 60px ;
            border-radius:30px;
            font-size: 1.2rem;
            background-color: white;
            opacity: 0.8;
            &:hover{
                opacity: 0.8;
                background-color: #9B9B9B;
              
            }
        }
    }
`;

export default ContactContainer;
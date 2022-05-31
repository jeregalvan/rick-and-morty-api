import React, {useState} from 'react';

import Header from '../../containers/Header/Header';
import ContactContainer from './contact-style';
import bannerTres from '../../assets/images/banner3.jpg';
import HeroContactContainer from '../../containers/Hero/HeroContacto';

const Contact = () => {

    const [formMessage, setFormMessage]  = useState({});

    const handleForm = (e) => {
        const updateMessage = {
            ...formMessage,
            [e.target.name]: e.target.value
        }
        setFormMessage(updateMessage);
    }

    const sendForm = () => {
        console.log(formMessage)
    }
 
    return (
        <ContactContainer backgrounddd={bannerTres}>
        <Header 
        />

            <HeroContactContainer>
            <div className='titulo'>
            <h1>Página de contacto</h1>
            </div>
            <div className='form'>

            <form>
                <input
                    type="text"
                    name="nombre"
                    placeholder="Nombre y Apellidos"
                    onBlur={(e) => handleForm(e)} />

                <input
                    type="email"
                    name="email"
                    placeholder="Correo"
                    onBlur={(e) => handleForm(e)} /><input
                    type="tel"
                    name="tel"
                    placeholder="Número de teléfono"
                    onBlur={(e) => handleForm(e)} /><br />
                <textarea name="mensaje" cols="30" rows="10" placeholder="Mensaje" onBlur={(e) => handleForm(e)}></textarea><br />
                <div>
                <span onClick={() => sendForm()}>Enviar</span>
                </div>
                
            </form>
            </div>
            </HeroContactContainer>
        </ContactContainer>
    )
};

export default Contact;
import React from 'react';
import { Link } from 'react-router-dom';

//Assets
import logo from '../../assets/images/logo.png';

//Styled-components
import LogoContainer from './Logo-style';

const Logo = () => {
    return (
        <LogoContainer>
            <Link to="/">
                <img className="logo-image" src={logo} alt="Logotipo pokedex" />
            </Link>
        </LogoContainer>
    );
};

export default Logo;
import React,{ useContext} from 'react';

import Logo from '../../components/Logo/Logo';
import HeaderContainer from './Header-style';
import { Link } from "react-router-dom";

const Header = ({ handleTheme }) => {

    return (
        <HeaderContainer>
            <Logo />
            <nav>
                <Link to="/">Home</Link>
                <Link to="/Personajes">Personajes</Link>
                <Link to="/contacto">Contacto</Link>
            </nav>
        </HeaderContainer>
    );
};

export default Header;
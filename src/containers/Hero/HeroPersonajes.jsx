import React from 'react';

import HeroPersonajes from './HeroPersonajes-style';
import bannerDos from '../../assets/images/banner2.png';

const HeroPersonajes = ({ children }) => {
    return (
        <HeroContainer backgroundd={bannerDos}>
            {children}
        </HeroContainer>
    );
};

export default HeroPersonajes;  
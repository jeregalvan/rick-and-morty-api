import React from 'react';

import HeroContactContainer from './HeroPersonajes-style';
import bannerTres from '../../assets/images/banner3.jpg';

const HeroContact = ({ children }) => {
    return (
        <HeroContactContainer backgroundd={bannerTres}>
            {children}
        </HeroContactContainer>
    );
};

export default HeroContact;
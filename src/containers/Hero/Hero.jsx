import React from 'react';

import HeroContainer from './Hero-style';
import banner from '../../assets/images/banner1.jpg';


const Hero = ({ children }) => {
    return (
        <HeroContainer background={banner}>
            {children}
        </HeroContainer>
    );
};

export default Hero;
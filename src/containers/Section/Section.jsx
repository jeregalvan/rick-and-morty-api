import React from 'react';

//Styled-components
import SectionContainer from './Section-style';

const Section = ({children}) => {
    return (
        <SectionContainer>
            {children}
        </SectionContainer>
    );
};

export default Section;
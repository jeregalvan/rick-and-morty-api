import React, { useContext} from 'react';


import HeadingH1Container from './HeadingH1-style';

const HeadingH1 = ({text, color, colorHover}) => {

    
    return (
        <HeadingH1Container colorHover={colorHover}>
                {text}
        </HeadingH1Container>
    );
};

export default HeadingH1;
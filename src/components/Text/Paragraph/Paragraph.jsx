import React from 'react';

//Styled-components
import ParagraphContainer from './Paragraph-style';

const Paragraph = ({text, color}) => <ParagraphContainer color={color}>{text}</ParagraphContainer>
  

export default Paragraph;
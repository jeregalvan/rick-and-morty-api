import styled from "styled-components";

const HeadingH1Container = styled.h1`
    font-size: 70px;
    line-height: 70px;
    color: white;
    margin-bottom: 20px;
    &:hover{
        color: ${(props) => props.colorHover};
    };
`;

export default HeadingH1Container;
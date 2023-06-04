import styled, { css } from "styled-components";


const Paragraph = styled.p`
    ${({theme}) => theme && css`
    color: ${theme.colors.gray};
    margin-bottom: 2rem;
    font-size: 1.32rem;     
    text-align: ${({ align }) => align || "center"};
    `}
    
    
`

export default Paragraph;


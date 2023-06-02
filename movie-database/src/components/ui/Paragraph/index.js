import styled, { css } from "styled-components";


const Paragraph = styled.p`
    ${({theme}) => theme && css`
    color: ${theme.colors.gray};
    margin-bottom: 1rem;
    font-size: 1.59rem;        
    `}
    
    
`

export default Paragraph;


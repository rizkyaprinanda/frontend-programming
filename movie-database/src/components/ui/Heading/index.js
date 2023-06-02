import styled from "styled-components";


const Heading = styled.h1`
    font-size: ${({ as, theme }) => theme[as].size || theme.h3.size};
    color: ${({ as, theme }) => theme[as]?.color ? theme.colors[theme[as].color] : theme.colors.gray };
    margin-bottom: 1rem;
   
   
`

export default Heading;
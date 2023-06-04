import styled from "styled-components";


const Heading = styled.h1`
    font-size: ${({ as, theme }) => theme[as].size || theme.h3.size};
    color: ${({ as, color, theme }) => 
        theme.colors[color]? theme.colors[color]: color || 
        color? color:color || 
        theme[as]?.color ? theme.colors[theme[as].color] : theme.colors.gray };
    margin-bottom: 1rem;
    text-align: ${({ align }) => align || "left"};
   
   
`

export default Heading;
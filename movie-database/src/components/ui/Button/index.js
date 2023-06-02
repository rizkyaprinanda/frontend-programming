// import styled component
import styled, { css } from "styled-components";

// Buat component Button
const Button = styled.button`
    border:none;
    border-radius: 10px;
    color: #fff;
    cursor: pointer;

    // Akses props variant
    background-color: ${({ variant, theme }) => theme.colors[variant] || theme.colors.primary};

    // Props Full
    ${(props) => props.full && css`
        display: block;
        width: 100%;        
    `}

    font-size: ${({ size, theme }) => theme.fontSize[size] ? theme.fontSize[size]: size || theme.fontSize.md};
    padding: ${({size, theme}) => theme.padding[size] || theme.padding.md};

`

export default Button;
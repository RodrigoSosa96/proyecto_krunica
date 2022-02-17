import styled from "styled-components";

export const Title = styled.h2`
    font-family: ${props => props.theme.font.menu};
    font-weight: 500;
    position: relative;
    text-align: center;
    font-size: 2.25rem;
    margin-bottom: 1.5rem;
    
    padding: 0 0.5rem 0 0.5rem;
    :after {
        content: '';
        position: absolute;
        width: 100%;
        height: 5px;
        bottom: -10px;
        left: 0;
        background-color: ${props => props.theme.color.blue};
    }
`
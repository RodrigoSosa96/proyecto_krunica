import styled from "styled-components";

export const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 1.5rem;
    @media (min-width: 768px) {
        grid-template-columns: repeat(8, minmax(0, 1fr));
    }

`;
export const DivImg = styled.div`
    display: flex;
    justify-items: center;
    justify-content: center;
`
export const Imagen = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    padding: 1rem;
    border: 1px solid black;
`

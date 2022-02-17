import styled from "styled-components";

import { Title } from "../styled/Title.styled";


const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* height: 520px; */
`
const CardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 1.6rem;
    
    
`

const Texto = styled.p`
    font-size: 2rem;
    font-family: ${props => props.theme.font.title};
    background-color: ${props => props.color ? props.theme.color.secondary : props.theme.color.primary};

    font-weight: 800;
    line-height: 37px;
    color: white;
    padding: 10px 12px 10px 12px;
    /* ::before {
        content: "↗";
        font-family: ${props => props.theme.font.title};
    font-weight: 800;
        font-size: 1.5rem;

    } */
`

function Servicios() {
    return (
        <Container>
            <Title>SERVICIOS</Title>
            <CardContainer>
                <Texto>BRANDING</Texto>
                <Texto color> DISEÑO UX/UI</Texto>
                <Texto>EDITORIAL</Texto>
                <Texto color>REDES SOCIALES</Texto>
                <Texto>PACKAGING</Texto>
                <Texto color>EDICIÓN DE VIDEOS</Texto>
                <Texto>ILUSTRACIÓN</Texto>
                <Texto color>DISEÑO WEB</Texto>
                <Texto>LETTERING</Texto>
                <Texto color>BOX</Texto>
                <Texto>ENCUADERNACIÓN ARTESANAL</Texto>
                <Texto color>CUADROS</Texto>
                <Texto>TALLERES</Texto>
                <Texto color>BOPAPELERÍAX</Texto>
            </CardContainer>
        </Container>
    )
}

export default Servicios;
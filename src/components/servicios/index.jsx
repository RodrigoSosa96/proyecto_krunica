import styled from "styled-components";

import { Title } from "../styled/Title.styled";
import getImageUrl from "../../assets/getImageUrl";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* padding-top: 1rem; */
    @media (min-width: 768px) {
        /* padding-top: 2rem; */

    }

    @media(min-width: 992px) {
        /* padding-top: 90px; */

    }
`
const CardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: .5rem;
    /* padding: 0 1rem; */
    @media(min-width: 768px) {
        gap: .7rem;
        /* padding: 0 2rem; */

    }
    
    @media (min-width: 992px) {
        gap: 1.6rem;

    }
    
    
`
const arrow = getImageUrl("arrow.svg");

const Texto = styled.p`
    position: relative;


    font-size: max(.5rem, 1vw);
    font-family: var(--font-title);
    background-color: ${props => props.color ? "var(--color-secondary)": "var(--color-primary)"};

    font-weight: 800;
    text-align: center;
    line-height: 1rem;
    color: white;
    padding: 3px 3px 3px 3px;

    text-indent: .7rem;
    /* max-width: 30%; */
    /* filter: grayscale(100%); */
    :hover {
        cursor: pointer;   
        /* filter: grayscale(0%); */
    }
    ::before {
        content: "";
        display: block;
        position: absolute;
        //svg 
        background-image: url(${arrow});
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain;
        width: .6rem;
        height: .6rem;
        top: 50%;
        transform: translateY(-50%);

    }
    @media (min-width: 768px) {
        line-height: 37px;

        width: unset;
        padding: 10px 12px 10px 12px;

        font-size:1.5rem;
        text-indent: 1.7rem;
        ::before {
            width: 1.5rem;
            height: 1.5rem;
        }
    }
    @media (min-width: 992px) {

        font-size: 2rem;
        text-indent: 2.2rem;

        ::before {
            width: 2rem;
            height: 2rem;

        }
    }
`

function Servicios({ data }) {

    return (
        <Container id="servicios">
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
                <Texto color>PAPELERÍA</Texto>
            </CardContainer>
        </Container>
    )
}

export default Servicios;
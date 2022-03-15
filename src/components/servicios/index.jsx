import styled from "styled-components";

import { Title } from "../styled/Title.styled";
import getImageUrl from "../../assets/getImageUrl";
import { Container } from "../styled/Wrapper.styled";

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
        /* gap: 1.6rem; */

    }
    
    
`
const arrow = getImageUrl("arrow.svg");

const TextBox = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.color ? "var(--color-secondary)": "var(--color-primary)"};
    /* padding: 12px; */
    cursor: pointer;
    
    p {
        position: relative;
        display: flex;
        /* font-size: max(.5rem, 1vw); */
        font-size: clamp(1rem, 1.8vw, 2rem);

        font-family: var(--font-title);
        padding: .2rem .5rem .2rem .2rem;

        font-weight: 800;
        text-align: center;
        line-height: 1rem;
        color: white;

        ::before {
            content: url(${arrow}); 
            position: relative;
            height: .5rem;
            width: .5rem;

        }

    }
    @media (min-width: 768px) {
        padding: .7rem .2rem .9rem .5rem;
        /* padding: .5rem .5rem; */
        p {
            line-height: 37px;
            /* font-size: 1.2rem; */
            /* font-size: clamp(1rem, 1.8vw, 2rem); */
            ::before {
                height: 1rem;
                width: 1rem;

            }
        }
    }
    @media (min-width: 992px) {
        /* padding: 1rem 1.2rem 1.2rem 0rem; */
        padding-right: 1.2rem;
        
        p {
            /* font-size: min(2rem, 2vw); */
            text-indent: 2rem;
            ::before {
                width: 1.5rem;
                height:1.5rem;
            }
        }
    }

`

function Servicios({ data }) {

    return (
        <Container id="servicios">
            <Title>SERVICIOS</Title>
            <CardContainer>
                <TextBox>
                    <p>BRANDING</p>
                </TextBox>
                <TextBox color>
                    <p>DISEÑO UX/UI</p>
                </TextBox>
                <TextBox>
                    <p>EDITORIAL</p>
                </TextBox>
                <TextBox color>
                    <p>REDES SOCIALES</p>
                </TextBox>
                <TextBox>
                    <p>PACKAGING</p>
                </TextBox>
                <TextBox color>
                    <p>EDICIÓN DE VIDEOS</p>
                </TextBox>
                <TextBox>
                    <p>ILUSTRACIÓN</p>
                </TextBox>
                <TextBox color>
                    <p>DISEÑO WEB</p>
                </TextBox>
                <TextBox>
                    <p>LETTERING</p>
                </TextBox>
                <TextBox color>
                    <p>BOX</p>
                </TextBox>
                <TextBox color>
                    <p>CUADROS</p>
                </TextBox>
                <TextBox>
                    <p>TALLERES</p>
                </TextBox>
                <TextBox color>
                    <p>PAPELERÍA</p>
                </TextBox>
                <TextBox>
                    <p>ENCUADERNACIÓN ARTESANAL</p>
                </TextBox>
            </CardContainer>
        </Container>
    )
}

export default Servicios;
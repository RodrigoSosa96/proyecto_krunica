import { memo } from 'preact/compat';
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
    cursor: pointer;
    
    p {
        --size: 1.5vw;

        position: relative;
        display: flex;
        font-family: var(--font-title);
        
        font-weight: 800;
        text-align: center;
        color: white;
        
        font-size: clamp(.5rem, var(--size), 2rem);

        line-height: clamp(1.4rem, 5vw, 3rem);
        padding-left: clamp(0.5rem, var(--size), 1.5rem);
        padding-right: clamp(0.5rem, var(--size), 1.5rem);
        
        ::before {
            content: url(${arrow}); 
            position: relative;
            height: 100%;
            width: 1.5rem;
            width: clamp(.6rem, var(--size), 1.5rem);


        }

    }
    /* @media (min-width: 768px) {
        padding: .7rem .2rem .9rem .5rem;
        p {
            line-height: 37px;

            ::before {
                height: 1rem;
                width: 1rem;

            }
        }
    }
    @media (min-width: 992px) {
        padding-right: 1.2rem;
        
        p {
            text-indent: 2rem;
            ::before {
                width: 1.5rem;
                height:1.5rem;
            }
        }
    } */

`

function Servicios() {

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

export default memo(Servicios);
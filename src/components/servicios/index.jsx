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
        position: relative;
        display: flex;
        /* font-size: max(.5rem, 1vw); */
        font-size: clamp(1rem, 4vw, 2rem);
        font-family: var(--font-title);
        /* padding: .2rem .5rem .2rem .2rem; */
        
        font-weight: 800;
        text-align: center;
        line-height: 3rem;
        line-height: clamp(1.2rem, 4vw, 3rem);

        padding-left: clamp(0.5rem, 4vw, 1.5rem);
        padding-right: clamp(0.5rem, 4vw, 1.5rem);
        color: white;

        ::before {
            content: url(${arrow}); 
            position: relative;
            height: 100%;
            width: 1.5rem;
            width: clamp(1rem, 4vw, 1.5rem);
            /* height: .5rem; */
            /* width: .5rem; */

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
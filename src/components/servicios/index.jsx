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
        gap: 1.6rem;

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

    :hover {
        cursor: pointer;   
        box-shadow:0px 0px 0px 3px ${props => props.color ? "var(--color-primary)": "var(--color-secondary)"} inset;
        p {
            /* text-shadow: 0px 0px 0px 10px black;
            text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000; */

        }
    
    }
    p {
        position: relative;
        display: flex;
        font-size: max(.5rem, 1vw);
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
        padding: .7rem .7rem .9rem .9rem;
        p {
            line-height: 37px;
            font-size:1.5rem;
            ::before {
                height: 1rem;
                width: 1rem;

            }
        }
    }
    @media (min-width: 992px) {
        padding: 1rem 1.2rem 1.2rem 0rem;
        
        p {
            font-size: 2rem;
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
                <TextBox>
                    <p>ENCUADERNACIÓN ARTESANAL</p>
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
            </CardContainer>
        </Container>
    )
}

export default Servicios;
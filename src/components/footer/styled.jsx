import styled from "styled-components";
import { HashLink as L } from "react-router-hash-link";

export const FooterContainer = styled.footer`
    display: flex;
    background-color: var(--color-primary);
    
    height: 90px;
    width: 100%;
    align-items: center;
    justify-content: space-between;


    padding: 0 5vw;


    @media(min-width: 768px) {
        height: min(276px, 14vw);
    }
    @media(min-width: 992px) {



    }
`
export const MainFooter = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;

    /* div+div {
        border-left: 3px solid var(--color-lines);
    } */

`
export const Titulo = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    border-right: 2px solid black;

    font-family: var(--font-title);
    padding-right: .5rem;
    gap: .5rem;


    h2 {
        /* font-size: 1.5rem; */
        font-weight: 700;
        text-align: center;
        font-size: 2.2rem;
        font-size: clamp(1rem, 2vw, 2.9rem);
        line-height: 56px;
        line-height: clamp(1rem, 2vw, 3.2rem);
    }
    svg {
        height: 4rem;
        width: 4rem;
        height: clamp(2rem, 3vw, 5rem);
        width: clamp(2rem, 3vw, 5rem);
            
    }
    @media(min-width: 768px) {
        h2 {
            /* font-size: 2rem; */
        }
    }
    @media(min-width: 992px) {
        gap: 1rem;

        padding-right: 2rem;


        h2 {
            /* font-size: 40px; */
            /* font-size: 45.91px;
            line-height: 56px; */
        }

    }


`
export const FooterNav = styled.nav`
    display: none;
    @media(min-width: 768px) {
        display: flex;
        align-items: center;
        justify-content: space-between;
        /* gap: 1rem; */
        width: 100%;

        height: clamp(calc(.8rem * 1.5), 1.5vw, calc(var(--font-size-main-text) * 1.6));
        a+a {
            border-left: 2px solid #898a8d;
        }
    }

    
`
export const Link = styled(L)`
    display: none;
    text-decoration: none;

    @media(min-width: 850px) {
        position: relative;
        display: flex;
        
        justify-content: center;
        align-items: center;


        color: var(--color-text);
        
        /* width: 100px; */
        padding: 0 .5rem;
        
        height: 100%;
        line-height: 19px;
        font-weight: 500;
        color: var(--color-text);
        font-size: clamp(.7rem, 1.3vw, 1rem);




            
    }
    @media(min-width: 992px) {
        padding: 0 1rem;

    }
    

`

export const Social = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;

    h3 {
        font-family: var(--font-title);
        font-weight: 300;

        /* font-size: 2.8rem; */
        /* font-size: clamp(1.1rem, 2vw, 2.8rem);  */
        font-size: clamp(1.1rem, 2vw, 1.5rem);

        /* line-height: 54.22px; */
        /* line-height: clamp(1rem, 2vw, 3.3rem); */
        text-align: center;
    }
    .footer-redes {
        display: flex;
        gap: .5rem;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        
    }
    @media(min-width: 992px) {
        gap: 2rem;
        .footer-redes {
            gap: 1rem;
        }
    }


`
export const SocialImg = styled.a`
        background-image: url(${props => props.src});
        background-size: cover;
        background-position: center;


        width: clamp(1.3rem, 2vw, 1.7rem);
        height: clamp(1.3rem, 2vw, 1.7rem);

        @media(min-width: 768px) {
        }
        @media (min-width: 992px) {
        }
`



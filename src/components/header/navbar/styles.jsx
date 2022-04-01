import styled from "styled-components"
import { HashLink as L } from 'react-router-hash-link';


export const Container = styled.nav`
    display: ${props => props.toggleMenu ? "flex" : "none"};
    

    align-items: center;

    flex-direction: column;



    transition: all 500ms ease-in-out;
    height: calc(100vh - 60px - 2rem);
    width: 100%;

    @media (min-width: 768px) {
        display: flex;
        gap: 0rem;
        flex-direction: row;
        overflow: hidden;
        
        width: unset;
        height: unset;
        
        
    }
    @media(min-width: 800px) {
        gap: 1rem;

    }
    @media(min-width: 992px) {
        gap: 2rem;
        
    }

    
`


export const MenuLinks = styled.nav`
        display: flex;
        
        align-items: center;
        justify-content: space-between;
        font-family: var(--font-menu);


        flex-direction: column;
        width: 100vw;
        gap: 3rem;




        @media(min-width: 768px) {
            flex-direction: row;
            width: unset;
            height: clamp(calc(.8rem * 1.5), 1.5vw, calc(var(--font-size-main-text) * 1.6));
            gap: 0;
            /* a {
                color: var(--color-text);

            } */
            a+a {
                border-left: 2px solid var(--color-lines);
            }
            
        }
        @media(min-width: 992px) {
            /* a{
                width: 120px;
            } */
        }
`


export const Social = styled.div`
        /* position: absolute; */
        position: fixed;
        display: flex;
        align-items: center;
        /* justify-content: space-between; */
        /* margin-top: 4rem; */
        gap: 1.5rem;

        bottom: 2rem;

        @media(min-width: 768px) {
            position: relative;
            gap: .2rem;
            margin-top: 0;
            bottom: unset;
            

        }
        @media(min-width: 800px) {
            gap: .5rem;
        }

        @media (min-width: 992px) {
            gap: 1rem;

        }
`

export const SocialImg = styled.a`
        background-image: url(${props => props.src});
        background-size: cover;
        background-position: center;
        width: 40px;
        height: 40px;
        @media(min-width: 768px) {
            width: 27px;
            height: 27px;
        }
        @media (min-width: 992px) {
            width: 34px;
            height: 34px;

        }
`


export const Link = styled(L)`
    position: relative;
    display: flex;

    justify-content: center;
    align-items: center;
    transition: all 1000ms ease-in-out;
    font-size: var(--font-size-main-text);
    color: var(--color-text);

    text-decoration: none;
    /* width: 100px; */
    padding: 0 .5rem;

    height: 100%;
    line-height: 19px;
    font-weight: 500;
    &.active {
        font-weight: 600;
        /* ::after{
            opacity: 1;
        } */
        :after {
            opacity: 1;
        }
    }
    :after {
        transition: ease-in-out all 0.5s;
        content: '';
        opacity: 0;
        position: absolute;
        width: 80%;
        height: 5px;
        bottom: -5px;
        background-color: var(--color-primary);

        /* transition: 0.25s ease;
        transform: scalex(0); */

    }
    :hover {
        font-weight: 600;
        cursor: pointer;
    }
    :hover::after {
        opacity: 1;
        /* transform: scalex(1); */
        
    }
    @media(min-width: 768px) {
        color: var(--color-text);
        font-size: clamp(.8rem, 1vw, var(--font-size-main-text));


            
    }
    @media(min-width: 992px) {
        /* width: 120px; */
        padding: 0 1rem;

    }
    

`
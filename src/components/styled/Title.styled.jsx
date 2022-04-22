import styled from "styled-components";

export const Title = styled.h2`
    font-family: var(--font-menu);
    font-size: 2rem;
    font-size: clamp(1.3rem, 3vw, 2.25rem);
    width: fit-content;
    align-self: center;
    font-weight: 500;
    position: relative;
    text-align: center;
    margin-bottom: 1rem;

    
    padding: 0 0.5rem 0 0.5rem;
    :hover::after {
        opacity: 1;
    }

    :after {
        opacity: 1;
        content: '';
        position: absolute;
        width: 100%;
        height: 2px;
        bottom: -5px;
        left: 0;
        background-color: var(--color-primary);
    }

    @media (min-width: 768px) {
        margin-bottom: 1.5rem;
        /* font-size: 1.5rem; */
        :after {
            opacity: 0;
            bottom: -6px;

            height: 3px;
            
        }
    }
    @media (min-width: 992px) {
        margin-bottom: 4rem;
        /* font-size: 2.25rem; */
        :after {
            height: 4px;
        }

    }
`
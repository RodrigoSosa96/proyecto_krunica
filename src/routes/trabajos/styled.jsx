import styled from "styled-components";

import { Title } from "../../components/styled/Title.styled";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
`
export const Categories = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 1rem ;
    width: 90% ;
    a {
        text-decoration: none;
        color: var(--color-text);
    }
    @media (min-width: 768px) {
        gap: 2rem;
        width: 100% ;
    }
    @media(min-width: 992px) {
        gap: 5rem;

    }
`
export const TrabajosTitle = styled(Title)`
    font-weight: 400;
    font-size: clamp(.9rem, 2vw, 2.25rem);
    user-select: none;
    :hover {
        cursor: pointer;
        font-weight: 500;
    }
    @media(hover: none) {
        :after {
            opacity: 0
        }
    }
    ${props => props.active && `
        font-weight: 500;
        ::after {
            opacity: 1;
        }
    `}

    @media(min-width: 768px) {
        font-size: 24px;
    }

    @media(min-width: 992px) {
        font-size: 26px;
        line-height: 32px;
    }
`
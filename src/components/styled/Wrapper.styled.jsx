import styled from "styled-components"
import { Link } from "../header/navbar/styles"
import { Title } from "../styled/Title.styled"


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    :hover ${Title}  {
        :after {
            opacity: 1;
        }
    }

`

export const CenterDiv = styled.div`
    position: relative;
    display: flex;
    flex-direction: ${props => props.direction || "row"};
    align-items: center;
    justify-content: center;

    
    width: 100%;
`
//main with 1400px max-width
export const Main = styled.main`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vw;
    
    margin: 1rem auto;
    /* max-width: 1654px; */
    /* width: 95%; */
    /* max-width: 1464px; */
    
    hr {
        width: 100%;
        border: none;
        border-top: 1px solid #C4C4C4;
        margin: 1rem 0 1rem 0;
        opacity: .3;
    }
    @media(min-width: 768px) {
        width: min(87vw, 1654px);
        hr {
            opacity: 1;
            margin: 2rem 0 2rem 0;
        }
    }
    @media (min-width: 992px) {
        /* margin: 2rem auto 2rem; */
        hr {
            margin: 4rem 0 4rem 0;
        }
    }
    `
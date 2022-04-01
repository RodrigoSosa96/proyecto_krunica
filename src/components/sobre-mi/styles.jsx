import styled from "styled-components";
import {Container as C} from "../styled/Wrapper.styled";

export const Container = styled(C)`
    h2 {
        position: relative;
        font-size: 1.5rem;
        font-size: clamp(1rem, 1vw, 1.5rem);
        font-weight: 600;
        text-align: center;
        margin-bottom: 2rem;
        margin-top: .5rem;
        span {
            position: relative;
        }
    }
    @media (min-width: 768px) {
        h2 {
            margin-bottom: 0;
            margin-top: 0;
        }
        height: 100%;
        flex-direction: row;
        
    }

`


export const GifVideo = styled.video`
    object-fit: cover;
    object-position: center;
    aspect-ratio: 0.90/1;
    margin-bottom: 1rem;
    width: 80%;
    @media (min-width: 768px) {
        width: min(42vw, 676px);
        /* float: left; */
        margin-right: min(5rem, 2vw);
    }
`;




export const Text = styled.p`
    font-size: var(--font-size-paragraph);
    font-family: var(--font-menu);
    font-weight: 400;
    line-height: 30px;
    text-align: justify;
    white-space: pre-wrap;

    font-size: clamp(0.8rem, 1vw, 1.125rem);
    font-size: 0.8rem;
    
    padding: 0 1rem 0 1rem;
    @media (min-width: 768px) {
        padding: 1rem 0rem 0 1rem;
        font-size: clamp(0.6rem, 1.2vw, 1.125rem);
        line-height: clamp(1.1rem, 2vw, 2rem);
        


    }


`
export const BoldText = styled(Text)`
    /* margin-top: 2rem; */
    font-weight: 600;
    width: 100%;
    text-align: left;
    /* float: left; */

    @media (min-width: 992px) {
        
    }
`


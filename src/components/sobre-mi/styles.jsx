import styled from "styled-components";
import {Container as C} from "../styled/Wrapper.styled";

export const Container = styled(C)`
    h2 {
        position: relative;
        font-size: 1.5rem;
        font-weight: 600;
        text-align: center;
        margin-bottom: 2rem;
        margin-top: .5rem;
        span {
            position: relative;
        }
    }
    @media (min-width: 768px) {
        display: block;
        position: relative;
        height: 100%;
        
    }

`


export const GifVideo = styled.video`
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: center;
    aspect-ratio: 0.91/1;
    margin-bottom: 1rem;
    width: 80%;
    @media (min-width: 768px) {
        width: min(50vw, 676px);
        float: left;
        margin-right: min(5rem, 4vw);
    }
`;




export const Text = styled.p`
    font-size: var(--font-size-paragraph);
    font-family: var(--font-menu);
    font-weight: 400;
    line-height: 33px;
    line-height: 30px;
    text-align: justify;
    white-space: pre-wrap;
    /* width: 100%; */
    font-size: 0.8rem;
    font-size: clamp(0.8rem, 0.7350000000000001rem + 0.32499999999999996vw, 1.125rem);
    
    padding: 0 1rem 0 1rem;
    @media (min-width: 768px) {
        line-height: 33px;
        padding: 3rem 1rem 0 1rem;

    }


`
export const BoldText = styled(Text)`
    margin-top: 2rem;
    font-weight: 600;
    width: 100%;
    text-align: center;
    text-align: left;
    //
    float: left;

    @media (min-width: 992px) {
        
    }
`


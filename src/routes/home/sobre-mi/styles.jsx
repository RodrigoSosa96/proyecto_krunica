import styled from "styled-components";
import { CenterDiv } from "../../../components/styles/Wrapper";

export const Card = styled(CenterDiv)`
    position: relative;
    gap: 70px;
    height: 742px;
`

export const Picture = styled.img`
    width: 676px;
    height: 100%;
    object-fit: cover;
`

export const TextDiv = styled.div`

    width: 716px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    
`


export const Text = styled.p`
    font-size: ${props => props.theme.fontSize.paragraph};
    font-family: 'Raleway', sans-serif;
    font-weight: 100;
    line-height: 33px;
    text-align: justify;
    white-space: pre-wrap;
    width: 100%;

`
export const BoldText = styled(Text)`
    margin-top: 30px;
    font-weight: bolder;
    width: 100%;
`
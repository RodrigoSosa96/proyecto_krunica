import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 520px;
`
export const CardContainer = styled.div`
    position: relative;
    gap: 70px;
    display:flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    
`
export const Card = styled.div`
    position: relative;
    width: 440px;
    height: 218px;
    text-align: center;
`
export const SubTitle = styled.h3`
    font-size: ${props => props.theme.fontSize.secondaryTitle};
    font-weight: bold;
`
export const Text = styled.p`
    font-size: ${props => props.theme.fontSize.paragraph};
    font-weight: lighter;

`
export const Image = styled.img`
    width: 100%;
    height: 100%;

`
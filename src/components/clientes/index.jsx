import { Title } from "../styled/Title.styled";
import styled, { keyframes } from "styled-components";
import getImageUrl from "../../assets/getImageUrl";
import { Wrapper } from "../styled/Wrapper.styled";
// import { Slider } from "./test";



const scroll = (size) => keyframes`

	0% { transform: translateX(0); }
	/* 100% { transform: translateX(calc(-250px * 7))} */
	100% { transform: translateX(calc(-250px * ${(size / 2)}))}
`
const Slider = styled.div`
    background: white;
    box-shadow: 0 10px 20px -5px rgba(0, 0, 0, .125);
    height: 100px;
    margin: auto;
    overflow:hidden;
    position: relative;
    /* width: 960px; */
    width:100%;

    &::before,
    &::after {
        background: linear-gradient(to right,  rgba(255,255,255,1) 0%,rgba(255,255,255,0) 100%);
        content: "";
        height: 100px;
        position: absolute;
        width: 100px;
        z-index: 2;
    }
    &::after {
        right: 0;
        top: 0;
        transform: rotateZ(180deg);
    }
    &::before {
        left: 0;
        top: 0;
    }

`;
const SlideTrack = styled.div`
    display: flex;
    /* width: calc(250px * 14); */
    width: calc(250px * ${props => props.size});
    animation: ${props => scroll(props.size)} ${props => props.speed}s linear infinite;
    /* gap: 1rem; */
    &:hover {
        animation-play-state: paused;

    }
`
const Slide = styled.div`
    height: 100px;
    width: 250px;
    img {
        //image centered and cover
        height: 100%;
        width: 100%;
        object-fit: contain;
        
    }
`



function Clientes({ data }) {
    let doubleData = data.concat(data);
    const slideData = data.map((cliente, index) => {
        return (
            <Slide>
                <img key={index} src={getImageUrl(cliente)} alt="" />
            </Slide>
        )
    })

    return (
        // <Wrapper>
        //     <Title>CLIENTES</Title>
        //     <GridContainer>
        //         {
        //             data.map((cliente, index) => {
        //                 return (
        //                     <DivImg>
        //                         <Imagen key={index} src={getImageUrl(cliente)} alt="" />
        //                     </DivImg>
        //                 )
        //             })
        //         }
        //     </GridContainer>
        // </Wrapper>
        <>
            <Slider  >
                <SlideTrack size={data.length * 2} speed="10" >
                    {
                        slideData.concat(slideData)
                    }
                </SlideTrack>
            </Slider>
        </>
    )
}

export default Clientes;
import styled from "styled-components";
import getImageUrl from '../../assets/getImageUrl';
import { Carousel } from '@trendyol-js/react-carousel';
import { HashLink as L } from "react-router-hash-link";

const Imagen = styled.img`
    border-radius: 5px;
    width: 95%;
    aspect-ratio: 1.27/1;
    object-fit: cover; 
    
    @media (min-width: 768px) {
        width: min(10.2vw, 200px);
        height: auto;

    }

`
const VerMas = styled(L)`
    font-size: 1.25rem;
    font-family: 'Montserrat', sans-serif;
    color: var(--color-lines);
    width: 100%;
    text-align: center;
    padding-top: 1rem;
    @media  (min-width: 768px) {
        padding-top: 0;
        width: unset;
    }
    :hover {
        /* filter: brightness(15%); */
        /* text-shadow: 1px 1px 10px #c4c4c4; */
        font-weight: 500;
        //color light black
        color: #000000e6;
}
`



const  StyledCarousel = styled(Carousel)`
    //display: none;
    position: relative;
    width: 100%;
    div {
        position: relative;
        display: flex;
        align-items: center;
        button[data-direction] {
            //top: calc(40% - 17px);
            
            /* top: -10px;
            width: 20px;
            height: 20px;
            display: block;
            cursor: pointer;
            // position: absolute;
            border: none;
           background: url(${getImageUrl('arrow-landing.svg')}) no-repeat center; */
        }
        /* button[data-direction='left'] { 
            left: -55px;

        }
        button[data-direction='right'] { 
            right: -55px;
            transform: rotateZ(180deg);
        } */

    }
`
function FotosContainer({ fotos, categoria }) {

    

    return (
        <>
            
            <StyledCarousel  show={3.5} slide={3} swiping={true} responsive={true} dynamic={true}>
                    {fotos.map((item, index) => (
                            <Imagen src={`https://ik.imagekit.io/akxdmkcb7g5u/tr:w-200/Krunica/${item}`} key={index} />
                    ))}
            </StyledCarousel>
            <VerMas smooth to={`/trabajos/${categoria}`}>
                VER +
            </VerMas>
        </>
    );
};
export default FotosContainer;
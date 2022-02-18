import { useEffect, useState } from "preact/hooks";
import styled from "styled-components";
import ImageRenderer from "./ImageRenderer";


const StyledTrabajos = styled.ul`
    position: relative;
    display: grid;
    grid-auto-flow: dense;
    gap: max(1rem, 1vw);
    @media screen and (min-width: 992px) {
        grid-template-columns: repeat(auto-fill, minmax(335px, 1fr));
        grid-auto-rows: repeat(auto-fill, minmax(335px, 1fr));
        place-content: center;
        /* gap: 2rem; */
      
        /* min-height: 100vh; */
        
        max-width: 90%;

    }

    
`


const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    /* height: 335px; */
    gap: 4rem;
    padding: 10%;
    background-color: rgba(0, 0, 0, 0.6);
    background-image: ${props => props.background ? `url(${props.background})` : "none"};

    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    color: #FFFFFF;
    h3 {
        text-align: center;
        font-size: 26px;
        line-height: 26px;
        font-weight: 600;
        
    }
    p {
        line-height: 23px;
        font-size: 18px;
        font-weight: 100;
        text-align: justify;
        hyphens: auto;
        
        
        word-spacing: -2px;
        
    }
    
    @media screen and (min-width: 992px) {
        
    }
    
    &.grid-span-tall {
        grid-row-end: span 2;
    }
    &.grid-span-large {
        grid-column: span 2;
        padding: 20%;
    }
    &.grid-span-big {
        grid-row-end: span 2;
        grid-column: span 2;
    } 
    
`




function GridLayout({ data }) {

    const imgURL = getImageUrl("../assets/img/trabajos");

    return (
        <StyledTrabajos>
            {/* {data.tarjetas.map((item, index) => {
                return (
                    <Card   background={imgURL(item.img[0])} key={index} className={item.size ? `grid-span-${item.size}` : ""}>
                            <h3>{item.titulo}</h3>
                            {item.descripcion ? <p>{item.descripcion}</p> : null}

                    </Card>
                    // <ImageRenderer 
                    //     url={getImageUrl(item.img[0])}
                    //     thumb={getImageUrl(item.img[1])}
                    //     width={1000}
                    //     height={1000}
                    // />
                );
            })} */}
        </StyledTrabajos>
    )
}



export default GridLayout;
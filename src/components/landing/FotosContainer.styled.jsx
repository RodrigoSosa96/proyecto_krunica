import styled from "styled-components";
import { getRemoteUrl } from "../../assets/getImageUrl";
import { HashLink as L } from "react-router-hash-link";

const  StyledCarousel = styled.div`
    //display: none;
    position: relative;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
`
const Imagen = styled.img`
    border-radius: 5px;
    width: 100%;
    object-fit: cover;
    
    aspect-ratio: 1.27/1;
    object-fit: cover; 
    
    @media (min-width: 768px) {
        /* width: min(10.2vw, 200px); */

    }

`
const VerMas = styled(L)`
    font-size: 1.25rem;
    font-size: clamp(1rem, 2vw, 1.25rem);
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




function FotosContainer({ fotos, categoria }) {

    const url = getRemoteUrl("https://ik.imagekit.io/akxdmkcb7g5u/Krunica/")

    return (
        <>
            
            <StyledCarousel >
                    {fotos.map((item, index) => (
                            <Imagen src={`${url(item, "w-200")}`} key={index} />
                    ))}
            </StyledCarousel>
            <VerMas smooth to={`/trabajos/${categoria}`}>
                VER +
            </VerMas>
        </>
    );
};
export default FotosContainer;
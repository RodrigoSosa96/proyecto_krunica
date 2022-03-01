import styled from "styled-components";
import getImageUrl from '../../assets/getImageUrl';

const ImgContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;    
    height: 100%;
    
    width: 22%;
    margin-left: auto;
    @media (min-width: 768px) {
        flex-direction: row;
        width: 100%;
        height: unset;
        justify-content: space-between;
    }

    @media (min-width: 992px) {
        /* gap: 1rem; */
    }
`
const Imagen = styled.img`
    /* width: 217px; */
    /* height: 171px; */
    width: 100%;
    
    /* height: 100%; */
    height: calc((100%/3) - .5rem);
    border-radius: 5px;
    aspect-ratio: 1.27/1;

    @media (min-width: 768px) {
        height: auto;
        width: calc((100% / 3) - .5rem);
    }

`
const VerMas = styled.a`
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
        filter: brightness(45%);
        text-shadow: 1px 1px 10px #c4c4c4;
    }
`


function FotosContainer({ fotos }) {
    return (
        <>
            <ImgContainer>

                {fotos.map((item, index) => (
                    <Imagen src={getImageUrl(item)} key={index} />
                ))}

            </ImgContainer>
            <VerMas href="#">
                VER +
            </VerMas>
        </>
    );
};
export default FotosContainer;
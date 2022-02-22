import styled from "styled-components";
import getImageUrl from '../../assets/getImageUrl';

const ImgContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    
    height: 100%;
    
    width: 22%;
    gap: .5rem;
    
    @media (min-width: 768px) {
        flex-direction: row;
        width: 100%;
        height: unset;
        justify-content: center;
    }

    @media (min-width: 992px) {
        gap: 1rem;
    }
`
const Imagen = styled.img`
    /* background-size: cover; */
    /* width: 217px; */
    /* height: 171px; */
    width: 80%;
    /* height: 100%; */

    border-radius: 4.92px;
    aspect-ratio: 1.27/1;

    @media (min-width: 768px) {
        height: auto;
        width: calc((100% / 3) - 1rem);
    }

`
const VerMas = styled.a`
    font-size: 1.25rem;
    font-family: 'Montserrat', sans-serif;
    color: ${props => props.theme.color.lines};
    width: 100%;
    text-align: center;
    padding-top: 1rem;
    @media  (min-width: 768px) {
        padding-top: 0;
        width: unset;
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
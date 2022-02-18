import styled from "styled-components";
import getImageUrl from '../../assets/getImageUrl';

const ImgFlex = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
    padding: 0.75rem;
`
const Imagen = styled.img`
    background-size: cover;
    width: 217px;
    height: 171px;
    border-radius: 4.92px;
`
const VerMas = styled.a`
    font-size: 1.25rem;
    font-family: 'Montserrat', sans-serif;
    color: ${props => props.theme.color.lines};
`


function FotosContainer({ fotos }) {
    return (
        <>
            <ImgFlex gap="2rem">

                {fotos.map((item, index) => (
                    <Imagen src={getImageUrl(item)} key={index} />
                ))}

            </ImgFlex>
            <VerMas href="#">
                VER +
            </VerMas>
        </>
    );
};
export default FotosContainer;
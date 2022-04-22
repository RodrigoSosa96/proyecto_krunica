import styled from "styled-components";
import { Title } from "../styled/Title.styled";
import getImageUrl from "../../assets/getImageUrl";
import { Container } from "../styled/Wrapper.styled";

const GridContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    margin: 0 auto;

    justify-items: center;
    width: 100%;

    @media (min-width: 768px) {
        gap: 1rem;

    }
    @media(min-width: 992px) {
        gap: 1.5rem;
    }


`;
const DivImg = styled.div`
    display: flex;
    justify-items: center;
    justify-content: center;
    align-items: center;
    width: min(25vw, 100px);

    @media(min-width: 768px) {
        /* height: 100px; */
        width: min(250px, 12vw);

    }
    @media(min-width: 992px) {
        height: 120px;
        
    }
`
const Imagen = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
    padding: 1rem;
    filter: grayscale(100%);
    opacity: 0.7;
    :hover {
        opacity: 1;
    }
`



function Clientes({ data }) {
    console.log("render");
    return (
        <Container id="clientes">
            <Title>CLIENTES</Title>
            <GridContainer>
                {
                    data.map((cliente, index) => {
                        // console.log(index)
                        return (
                            <DivImg key={index}>
                                <Imagen src={getImageUrl(cliente)} alt="" />
                            </DivImg>
                        )
                    })
                }
            </GridContainer>
        </Container>
    )
}

export default Clientes;
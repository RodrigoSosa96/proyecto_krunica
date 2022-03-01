import { Title } from "../styled/Title.styled";
import styled from "styled-components";
import getImageUrl from "../../assets/getImageUrl";
import { Wrapper } from "../styled/Wrapper.styled";

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
    /* height: 50px; */
    max-width: 100px;
    
    @media(min-width: 768px) {
        /* height: 100px; */

    }
    @media(min-width: 992px) {
        height: 120px;
        max-width: 250px;
        
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
    return (
        <Wrapper>
            <Title>CLIENTES</Title>
            <GridContainer>
                {
                    data.map((cliente, index) => {
                        return (
                            <DivImg>
                                <Imagen key={index} src={getImageUrl(cliente)} alt="" />
                            </DivImg>
                        )
                    })
                }
            </GridContainer>
        </Wrapper>
    )
}

export default Clientes;
import { Title } from "../styled/Title.styled";
import styled from "styled-components";
import getImageUrl from "../../utils/getImageUrl";
import { Wrapper } from "../styled/Wrapper.styled";

const GridContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    /* grid-template-columns: repeat(6, 1fr); */
    //center
    justify-items: center;
    width: 100%;
    gap: 1.5rem;
    /* @media (min-width: 768px) {
        grid-template-columns: repeat(8, minmax(0, 1fr));
    } */

`;
const DivImg = styled.div`
    display: flex;
    justify-items: center;
    justify-content: center;
    align-items: center;

    width: 230px;
`
const Imagen = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
    padding: 1rem;
    //black and white
    filter: grayscale(100%);
`



function Clientes({ data }) {
    const imageUrl = getImageUrl("../assets/img/home/");
    return (
        <Wrapper>
            <Title>CLIENTES</Title>
            <GridContainer>
                {
                    data.map((cliente, index) => {
                        return (
                            <DivImg>
                                <Imagen key={index} src={imageUrl(cliente)} alt="" />
                            </DivImg>
                        )
                    })
                }
            </GridContainer>
        </Wrapper>
    )
}

export default Clientes;
import { Title } from "../styled/Title.styled";
import styled from "styled-components";
import { clientes } from "../../data.json"



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



function getImageUrl(name) {
    if (name === "") return "";
    return new URL(`../../../assets/img/home/${name}`, import.meta.url).href
}
function Clientes() {
    console.log(clientes)
    return (
        <>
            <Title>CLIENTES</Title>
            <GridContainer>
                {/* <Imagen src={clientes[0]} alt="" /> */}
                {
                    clientes.map((cliente, index) => {
                        return (
                            <DivImg>
                                <Imagen key={index} src={getImageUrl(cliente)} alt="" />
                            </DivImg>
                        )
                    })
                }
            </GridContainer>
        </>
    )
}

export default Clientes;
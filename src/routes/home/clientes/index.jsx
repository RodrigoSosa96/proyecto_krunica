import { Title } from "../../../components/styles/Title.styled";
import { clientes } from "../../../data.json"
import { GridContainer, DivImg, Imagen } from './styled'


function Clientes() {
    console.log(clientes)
    return (
        <>
            <Title>CLIENTES</Title>
            <GridContainer>
                <DivImg>
                    <Imagen src={clientes[0]} alt="" />
                </DivImg>
            </GridContainer>
        </>
    )
}

export default Clientes;
import { Title } from "../../../components/styles/Title.styled";
import { Container, CardContainer, Card, SubTitle, Text, Image } from "./styles";
import { servicios } from '../../../data.json'


function Servicios() {
    return (
        <Container>
            <Title>SERVICIOS</Title>
            <CardContainer>
                {servicios.map((item, i) => {
                    return (
                        <Card key={i}>
                            <Image src={item.icono} alt={item.nombre}></Image>
                            <SubTitle>{item.nombre}</SubTitle>
                            <Text>{item.descripcion}</Text>
                        </Card>
                    )
                })}
            </CardContainer>
        </Container>
    )
}

export default Servicios;
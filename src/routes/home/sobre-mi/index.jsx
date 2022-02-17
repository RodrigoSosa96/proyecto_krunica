import {Card, Picture, TextDiv, Text, BoldText } from "./styles"
import { Title } from "../../../components/styled/Title.styled";

function SobreMi({ text }) {
    const titulo = "Sobre mi";
    const parrafo = `¡Hola soy Clara! Creadora de Krunica. Soy diseñadora gráfica recibida en la UBA. Hace más de 15 años que me dedico al diseño. En estos años trabajé y sigo trabajando de manera freelance para diferentes empresas.

Soy una persona muy activa, si bien mi trabajo es bastante sedentario porque paso horas frente a la computadora mi cabeza trabaja a 220v. Amo el mundo digital, es por eso que siempre sigo estudiando porque la tecnología avanza de manera muy veloz y uno tiene que estar siempre a la vanguardia. Estudié diseño UX/UI y conocí un mundo increíble el cual me abrió puertas para seguir creciendo en lo mío. También amo el mundo manual, el lettering es una de mis pasiones... dibujar letras me divierte y relaja. 
    
Soy encuadernadora artesanal hace muchos años, doy talleres y también hago producciones para empresas o pedidos personalizados. Encuadernar es mi cable a tierra. Me gusta mucho escapar un rato de la compu y crear desde otro lugar, el diseño está en todos lados y sobretodo en mis venas jeje.`
    const parrafoBold = `Te invito a conocer mis trabajos y a contactarme si te gusta lo que hago.
¡Gracias por estar acá!
    `
    return (
        <Card>
            <Picture src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131" />
            <TextDiv>
                <Title>{titulo}</Title>
                <Text>{parrafo}</Text>
                <BoldText>{parrafoBold}</BoldText>
            </TextDiv>
        </Card>
    )
}


export default SobreMi;
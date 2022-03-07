import { Container, Text, BoldText, GifVideo } from "./styles"
import { Title } from "../styled/Title.styled";

import getImageUrl from "../../assets/getImageUrl";



function    SobreMi({ data }) {

    const { name, description, description_bold, img, video } = data;


    return (
        <Container id="about-me">
            <GifVideo src={getImageUrl(video)} autoPlay loop muted />
            <h2><Title as="span">{name} </Title> </h2>
            <Text>{description}</Text>
            <BoldText>{description_bold}</BoldText>
        </Container>
    )
}


export default SobreMi;
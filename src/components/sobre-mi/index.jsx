import styled from "styled-components";

import { Card, Picture, TextDiv, Text, BoldText, GifVideo } from "./styles"
import { Title } from "../styled/Title.styled";
import getImageUrl from "../../utils/getImageUrl";

//gif video component



function SobreMi({ data }) {
    const { name, description, description_bold, img, video } = data;
    const imgUrl = getImageUrl("/assets/img/");
    
    return (
        <Card>
            {/* <Picture src={imgUrl(img)} /> */}
            <GifVideo src={imgUrl(video)} autoPlay loop muted />
            <TextDiv>
                <Title>{name}</Title>
                <Text>{description}</Text>
                <BoldText>{description_bold}</BoldText>
            </TextDiv>
        </Card>
    )
}


export default SobreMi;
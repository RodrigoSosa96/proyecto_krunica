import { Card, Picture, TextDiv, Text, BoldText, GifVideo } from "./styles"
import { Title } from "../styled/Title.styled";
import getImageUrl from "../../assets/getImageUrl";



function SobreMi({ data }) {
    const { name, description, description_bold, img, video } = data;
    
    return (
        <Card>
            {/* <Picture src={imgUrl(img)} /> */}
            <GifVideo src={getImageUrl(video)} autoPlay loop muted />
            <TextDiv>
                <Title>{name}</Title>
                <Text>{description}</Text>
                <BoldText>{description_bold}</BoldText>
            </TextDiv>
        </Card>
    )
}


export default SobreMi;
import { Card, Text, BoldText, GifVideo } from "./styles"
import { Title } from "../styled/Title.styled";

import getImageUrl from "../../assets/getImageUrl";
import styled from "styled-components";



const WeirdTitle = styled(Title)`
    @media (min-width: 768px) {
        position: absolute;
        left: min(63vw, 68%);
    }
`
function SobreMi({ data }) {

    const { name, description, description_bold, img, video } = data;


    return (
        <Card >
            {/* <Picture src={imgUrl(img)} /> */}
            <GifVideo src={getImageUrl(video)} autoPlay loop muted />
            <WeirdTitle>{name}</WeirdTitle>
            <Text>{description}</Text>
            <BoldText>{description_bold}</BoldText>

        </Card >
    )
}


export default SobreMi;
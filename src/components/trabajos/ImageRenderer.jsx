import { useRef, useState } from 'preact/hooks';
import { useIntersection } from '../../hooks/IntersectionObserver';
import styled from 'styled-components';

const ImageContainer = styled.div`
  background-color: #ccc;
  overflow: hidden;
  position: relative;
  max-width: 800px;
  margin: 20px auto;
  width: 100%;
  padding-bottom: ${props => props.height / props.width * 100}%;
`;
const Image = styled.img`
    position: absolute;
    width: 100%;
    height: 100%;
    width: 100px;
    height: 100px;
    opacity: 0;
    &.thumb {
            opacity: 1;
            filter: blur(10px);
            transition: opacity 1s ease-in-out;
            position: absolute;
            &.isLoaded {
            opacity: 0;
            }
    }
    &.isLoaded {
            transition: opacity 1s ease-in-out;
            opacity: 1;
    }
`;

const ImageRenderer = ({ url, thumb, width, height }) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [isInView, setIsInView] = useState(false);
    const imgRef = useRef();
    useIntersection(imgRef, () => {
        setIsInView(true);
    });

    const handleOnLoad = () => {
        setIsLoaded(true);
    };
    return (
        <ImageContainer ref={imgRef} width={width} height={height}>
            {isInView && (
                <>
                    <Image
                        className={`image thumb ${isLoaded ? "isLoaded" : ""}`}
                        src={thumb}
                    />
                    <Image
                        className={`image ${isLoaded ? "isLoaded" : ""}`}
                        src={url}
                        onLoad={handleOnLoad}
                    />
                </>
            )}
        </ImageContainer>
    );
};

export default ImageRenderer;

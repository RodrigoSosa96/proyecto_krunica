import { Container, Text, BoldText, GifVideo } from "./styles"
import { Title } from "../styled/Title.styled";

import getImageUrl from "../../assets/getImageUrl";
import { useEffect, useRef } from "preact/hooks";



function SobreMi({ data }) {
	const { name, description, description_bold, img, video } = data;
	const videoRef = useRef();
	useEffect(() => {
		const video = videoRef.current;
		let playPromise = video.play();
		if (playPromise !== undefined) {
			playPromise.then((_) => {
				let observer = new IntersectionObserver((entries) => {
					entries.forEach(
						(entry) => {
							if (entry.intersectionRatio !== 1 && !video.paused) {
								video.pause();
							} else if (video.paused) {
								video.play();
							}
						},
						{ threshold: 0.2 }
					);
				});
				observer.observe(video);
			});
		}
	}, []);

	return (
		<Container id='about-me'>
			<GifVideo src={getImageUrl(video)} autoPlay loop muted ref={videoRef} />
			<div>
				<h2>
					<Title as='span'>{name} </Title>
				</h2>
				<Text>{description}</Text>
				<BoldText>{description_bold}</BoldText>
			</div>
		</Container>
	);
}


export default SobreMi;
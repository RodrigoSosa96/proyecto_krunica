import { useState } from 'preact/hooks';
import styled from 'styled-components'
import { CenterDiv } from "../../../components/styled/Wrapper.styled";


export const BoxContainer = styled(CenterDiv)`
    gap : 2rem;
	margin-bottom: 10rem;
	padding:1rem;
	
`

const Box = styled(CenterDiv)`
	background-color: ${props => props.theme.color.primary};
	width: 716px;
	height: 540px;
	border-radius: 4.93px;
	font-size: ${props => props.theme.fontSize.backgroundTextBig};
	transition: all 0.5s ease-in-out;
	
	h2 {
		font-family: ${props => props.theme.font.title};
		font-weight: 400;	
		strong {
			font-weight: 600;
		}
		white-space: pre-wrap;
		text-align: center;
	}
	p{
		font-size: ${props => props.theme.fontSize.paragraph};
		word-break:break-all;
		white-space: pre-wrap;
		text-align: center;
	}
	:hover {
		background-color: ${props => props.theme.color.secondary};
	}
	.hide {
		display: none;
		animation: fadeOut 0.5s;
		:hover {
			animation: fadeIn 0.5s;
		}
	}
	.show {
		display: block;
		animation: fadeIn 0.8s;
		:hover {
			animation: fadeOut 0.5s;
		}
	}
	@keyframes fadeIn {
	0% {opacity:0;}
	100% {opacity:1;}
	}
	@keyframes fadeOut {
	0% {opacity:1;}
	100% {opacity:0;}
	}

`
function useHover() {
	const [hovering, setHovering] = useState(false)
	const onHoverProps = {
		onMouseEnter: () => setHovering(true),
		onMouseLeave: () => setHovering(false),
	}
	return [hovering, onHoverProps]
}



export const BoxWithText = ({ name, description }) => {
	const [showText, setShowProperties] = useHover()
	const titulo = name.split(" ")

	return (
		<Box {...setShowProperties} >
			<h2 className={showText ? "hide" : "show"}>
				<strong>{titulo[0].toUpperCase()}</strong><br />
				{titulo[1]}
			</h2>

			<p className={showText ? "show" : "hide"}>
				{description}
			</p>

		</Box>
	)
}
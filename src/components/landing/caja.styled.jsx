import { useState } from 'preact/hooks';
import styled from 'styled-components'
import { HashLink as L } from "react-router-hash-link";




const Box = styled(L)`
	text-decoration: none;
	color: inherit;

    position: relative;
    display: flex;
    flex-direction: ${props => props.direction || "row"};
    align-items: center;
    justify-content: center;
    
	background-color: var(--color-primary);
	/* width: max(716px); */
	border-radius: 4.93px;
	font-size: 1.3rem;
	transition: all 0.5s ease-in-out;
	
	width: 100%;
    aspect-ratio: 1.50/1;
	/* height: 100%; */

	
	
	h2 {
		font-size: 30px;
		font-family: var(--font-title);
		font-weight: 400;	
		white-space: pre-wrap;
		text-align: center;
		line-height: 36px;
		strong {
			font-weight: 600;
		}
		
	}
	p{
		font-size: 1rem;
		word-break:break-all;
		white-space: pre-wrap;
		text-align: center;

	}
	:hover {
		background-color: var(--color-secondary);
		cursor: pointer;
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
	@media (min-width: 768px) {
		height: min(29vw, 540px);
		width:100%;
	}
	@media(min-width: 992px) {
		font-size: 30px;
		p{ 
			font-size: 20px;
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
	.caja-invisible {
		/* display: none; */
		opacity: 0;
		position: absolute;
		width: 100%;
		height: 100%;

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



const BoxWithText = ({ name, description, to }) => {
	const [showText, setShowProperties] = useHover()
	const titulo = name.split(" ")
	
	return (
		<Box {...setShowProperties} smooth to={to} >
			<h2 className={showText ? "hide" : "show"}>
				<strong>{titulo[0].toUpperCase()}</strong><br />
				{titulo[1]}
			</h2>

			<p className={showText ? "show" : "hide"}>
				{description}
			</p>
			<div className='caja-invisible'/>
		</Box>
	)
}

export default BoxWithText
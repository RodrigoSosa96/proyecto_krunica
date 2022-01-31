import styled from "styled-components"

export const StyledHeader = styled.header`
	/* position: fixed; */
	width: 100%;

	display: flex;
	align-items: flex-end;
	justify-content: center;
	height: 174px;
	// left: 0; 
	// top: -40px; 
	/* border-bottom: 1px solid rgb(231, 231, 233); // !temp */
	// box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.1); 
	background-color: ${props => props.theme.color.background};
	font-family: ${props => props.theme.font.menu};
	z-index: 1000;
	transition: all 700ms ease;

	&.shrunk {
		height: 110px;
	}
`
export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 1480px;
    height: 84px;
    height: 100%;
`
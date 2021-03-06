import styled from "styled-components"

export const StyledHeader = styled.header`
	position: sticky;
	width: 100%;
	top:0;
	display: flex;
	align-items: flex-end;
	justify-content: center;
	/* margin-bottom: 2rem; */

	background-color: rgba(255, 255, 255);
	
	font-family: var(--font-menu);
	z-index: 1000;
	transition: all 500ms ease-in-out;
	
	@media(min-width: 768px) {
		background-color: rgba(255, 255, 255);
		
	}
	@media(min-width: 992px) {
	
		/* height: ${props => props.shrunk ? "100px" : "174px"}; */
		height: ${props => props.shrunk ? "90px" : "124px"};
		border-bottom: ${props => props.shrunk ? "1px solid rgb(231, 231, 233)" : "none"};
		box-shadow: ${props => props.shrunk ? "0 2px 10px 0 rgba(0, 0, 0, 0.1)" : "none"};
		border-bottom: 1px solid white;
		
	}

`
export const Container = styled.div`

    display: flex;
    align-items: center;
    justify-content: space-between;
	flex-wrap: wrap;
	gap: 1rem;
    width: min(90vw, 1480px);




	/* height: 90px; */
	/* height: 50vh; */
	@media(min-width: 768px) {
		height: unset;
		gap: unset;
	}

`


//make hamburger menu
export const StyledHamburger = styled.div`
	display: flex;
	flex-direction: column;

    height: 60px;
	//align items center 
	justify-content: center;

	cursor: pointer;
	span {
		height: 2px;
		width: 25px;
		background-color: rgb(80, 81, 97);
		margin-bottom: 4px;
		border-radius: 5px;
	}
	@media(min-width: 768px) {
		height: 90px;
		
		display: none;
		span {
			height: 2px;
			width: 25px;
			background-color: #000000;
			margin-bottom: 4px;
			border-radius: 5px;
		}
	}
	
`

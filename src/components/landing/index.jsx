import styled from "styled-components";
import BoxWithText from "./caja.styled";
import FotosContainer from './FotosContainer.styled';
import { Container as C } from "../styled/Wrapper.styled";
import { HashLink as L } from "react-router-hash-link";

const Container = styled(C)`
	justify-content: space-between;
    width: 100%;
	gap: 1rem;
	@media (min-width: 768px) {
		flex-direction: row;
		gap: unset;
	}
`


const BoxContainer = styled.div`
	position: relative;
	display: flex;
	/* align-items: center;
	justify-content: center; */

	
	flex-wrap: wrap;

    
	width: 80%;
	gap: 1rem;
	/* width: 500px; */
	/* padding: .5rem; */
	//flex-direction: row;
	flex-direction: column;
	@media (min-width: 768px) {
		width: calc(50% - .5rem);

		/* width: 50%; */
		/* margin-bottom: 2rem; */
		height: unset;
	}

	@media (min-width: 992px) {
		width: calc(50% - 1rem);
		gap : 2rem;
		/* padding:1rem; */
		/* margin-bottom: 8rem; */

	}
	
`

function Landing({ data }) {
	return (
		<Container  id="landing">
			<BoxContainer  >
					<BoxWithText name={data.taller.name} description={data.taller.description} to="/trabajos/taller" />
				<FotosContainer fotos={data.taller.fotos} categoria="taller" />
			</BoxContainer>
			<BoxContainer >
					<BoxWithText name={data.estudio.name} description={data.estudio.description} to="/trabajos/estudio" />
				<FotosContainer fotos={data.estudio.fotos} categoria="estudio" />
			</BoxContainer>
		</Container>
	)
}

export default Landing;

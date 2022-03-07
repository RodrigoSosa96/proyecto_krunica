import styled from "styled-components";
import BoxWithText from "./caja.styled";
import FotosContainer from './barra.styled';
import { Container as C } from "../styled/Wrapper.styled";

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

    
	width: 100%;
	/* width: 500px; */
	/* padding: .5rem; */
	flex-direction: row;
	@media (min-width: 768px) {
		width: calc(50% - .5rem);

		flex-direction: column;
		/* width: 50%; */
		/* margin-bottom: 2rem; */
		height: unset;
		gap: 1rem;
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
		<Container  id="test">
			<BoxContainer  >
				<BoxWithText name={data.taller.name} description={data.taller.description} />
				<FotosContainer fotos={data.taller.fotos} />
			</BoxContainer>
			<BoxContainer >
				<BoxWithText name={data.estudio.name} description={data.estudio.description} />
				<FotosContainer fotos={data.estudio.fotos} />
			</BoxContainer>
		</Container>
	)
}

export default Landing;

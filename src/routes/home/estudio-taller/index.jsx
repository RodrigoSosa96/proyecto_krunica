import FotosContainer from './barra.styled';
import { BoxContainer, BoxWithText } from "./caja.styled";
import { CenterDiv } from '../../../components/styles/Wrapper';
import { landing } from "../../../data.json"


const Landing = () => {



	const data = landing
	return (
		<CenterDiv>
			<BoxContainer direction="column" >
				<BoxWithText name={data.taller.name} description={data.taller.description} />
				<FotosContainer fotos={data.taller.fotos} />
			</BoxContainer>
			<BoxContainer direction="column" >
				<BoxWithText name={data.estudio.name} description={data.estudio.description} />
				<FotosContainer fotos={data.estudio.fotos} />
			</BoxContainer>
		</CenterDiv>

	)
}

export default Landing;

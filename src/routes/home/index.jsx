import Clientes from "../../components/clientes";
import Landing from "../../components/landing";
import Servicios from "../../components/servicios";
import SobreMi from "../../components/sobre-mi";
import Prensa from "../../components/prensa";
import Contacto from "../../components/contacto";

import { home } from "../../data.json"
import styled from "styled-components";



// const absoluteUrl = new URL("/src/assets/img/insta.svg", import.meta.url);
// const test = new URL("./src/assets/img/insta.svg", import.meta.url);
// const build = new URL("./build/assets/img/insta.svg", import.meta.url);

const TestImg = styled.img`
	width: 100px;
	height: 100px;
	background-color: ${props => props.color};
	`

function Home() {
	const test = new URL(import.meta.env.BASE_URL, import.meta.url);
	const normalUrl = new URL("/src/assets/img/insta.svg", test);
	return (
		<>
			<TestImg color="red" src={normalUrl} />
			{/* <TestImg color="blue" src={absoluteUrl} /> */}
			{/* <TestImg color="green" src={test} /> */}
			{/* <TestImg color="yellow" src={build} /> */}
			{/* <TestImg color="purple" src={buildTest} /> */}


			<Landing data={home.landing} />
			<SobreMi data={home.about_me} />
			<Servicios data="" />
			<Clientes data={home.clientes} />
			<Prensa />
			<Contacto />
		</>
	);

}

export default Home;

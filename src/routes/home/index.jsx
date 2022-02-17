import Clientes from "../../components/clientes";
import Landing from "../../components/estudio-taller";
import Servicios from "../../components/servicios";
import SobreMi from "../../components/sobre-mi";
import Prensa from "../../components/prensa";
import Contacto from "../../components/contacto";
import Separator from "../../components/styled/Separator.styled";

function Home() {

	return (
		<>
			<Landing />
			{/* <Separator /> */}
			<SobreMi />
			{/* <Separator /> */}

			<Servicios />
			{/* <Separator /> */}

			<Clientes />
			{/* <Separator /> */}

			<Prensa />
			{/* <Separator /> */}

			<Contacto/>
		</>
	);

}

export default Home;

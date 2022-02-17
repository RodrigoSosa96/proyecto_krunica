import Clientes from "./clientes";
import Landing from "./estudio-taller";
import Servicios from "./servicios";
import SobreMi from "./sobre-mi";
import Prensa from "./prensa";
import Contacto from "./contacto";
import Separator from "../../components/styled/Separator.styled";

function Home() {

	return (
		<>
			<Landing />
			<Separator />
			<SobreMi />
			<Separator />

			<Servicios />
			<Separator />

			<Clientes />
			<Separator />

			<Prensa />
			<Separator />

			<Contacto/>
		</>
	);

}

export default Home;

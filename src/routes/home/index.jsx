import Clientes from "./clientes";
import Landing from "./estudio-taller";
import Servicios from "./servicios";
import SobreMi from "./sobre-mi";
import Prensa from "./prensa";

const Home = () => {

	return (
		<>
			<Landing />
			<SobreMi/>
			<Servicios />
			<Clientes/>
			<Prensa/>
		</>
	);

}

export default Home;

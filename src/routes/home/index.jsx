import Landing from "../../components/landing";
import SobreMi from "../../components/sobre-mi";
import Servicios from "../../components/servicios";
import Clientes from "../../components/clientes";
import Prensa from "../../components/prensa";
import Contacto from "../../components/contacto";

import { home } from "../../data.json"




function Home() {
	return (
		<>
			<Landing data={home.landing} />
			<hr />
			<SobreMi data={home.about_me} />
			<hr />
			<Servicios data="" />
			<hr />
			<Clientes data={home.clientes} />
			<hr />
			<Prensa />
			<hr />

			<Contacto />
		</>
	);

}

export default Home;

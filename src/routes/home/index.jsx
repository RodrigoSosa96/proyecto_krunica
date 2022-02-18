import Clientes from "../../components/clientes";
import Landing from "../../components/landing";
import Servicios from "../../components/servicios";
import SobreMi from "../../components/sobre-mi";
import Prensa from "../../components/prensa";
import Contacto from "../../components/contacto";

import { home } from "../../data.json"

function Home() {
	console.log(new URL("/src/assets/images/trabajos/trabajo-1.jpg", import.meta.url));

	return (
		<>
			<Landing data={home.landing} />
			<SobreMi data={home.about_me} />
			<Servicios data=""/>
			<Clientes data={home.clientes}/>
			<Prensa />
			<Contacto />
		</>
	);

}

export default Home;

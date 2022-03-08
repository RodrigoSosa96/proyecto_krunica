import { BrowserRouter as Router, Route, Routes, Navigate} from "react-router-dom";
import { GlobalStyle } from './components/styled/Global.styled';
import { Main } from './components/styled/Wrapper.styled';

import Header from './components/header';
import Home from './routes/home';
import TrabajosMenu from './routes/trabajos';
import Footer from './components/footer';
import Trabajos from "./components/trabajos";

const App = () => {
	return (
		<>
			<GlobalStyle />
			<Router>
				<Header />
				<Main>
				<Routes>
					<Route exact path="/" element={<Home/>} />
					<Route path="trabajos" element={<TrabajosMenu/>} >
						<Route path=":category" element={<Trabajos/>} />
					</Route>
					<Route path="*" element={<Navigate to="/"/>} />
				</Routes>
				</Main>
				<Footer />
			</Router>
		</>
	);
};

export default App;

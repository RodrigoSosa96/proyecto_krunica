import { Route, Router } from 'preact-router';

import Home from './routes/home';
import NotFoundPage from './routes/notfound';

import Header from './components/header';
import { GlobalStyle } from './components/styled/Global.styled';
import { Main } from './components/styled/Wrapper.styled';
import Footer from './components/footer';
import Trabajos from './routes/trabajos';

const App = () => {
	return (
		<div id="preact_root">
			<GlobalStyle />
				<Header />
				<Main >
					<Router>
						<Route path="/" component={Home} />
						<Route path="/trabajos" component={Trabajos} />
						<NotFoundPage default />
					</Router>
				</Main>
				<Footer />
		</div>
	);
};

export default App;

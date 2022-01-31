import { Route, Router } from 'preact-router';
import { ThemeProvider } from 'styled-components';

import Home from './routes/home';
import Profile from './routes/profile';
import NotFoundPage from './routes/notfound';

import Header from './components/header';
import theme from './context/ThemeProvider';
import { GlobalStyle } from './components/styles/Global.styled';
import { CenterDiv } from './components/styles/Wrapper';


const App = () => {
	const test = new URL("/assets/icons", import.meta.url)
	console.log(test)
	return (
		<div id="preact_root">
			<GlobalStyle />
			<ThemeProvider theme={theme} >
				<Header />
				<CenterDiv as="main" direction="column" >
					<Router>
						<Route path="/" component={Home} />
						<Route path="/profile/" component={Profile} user="me" />
						<Route path="/profile/:user" component={Profile} />
						<NotFoundPage default />
					</Router>
				</CenterDiv>
			</ThemeProvider>
		</div>
	);
};

export default App;

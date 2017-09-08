import React, { Component } from 'react';
import Routes from './routes';
import Header from './components/Header/Header';
import ContextProvider from './utils/ContextProvider';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			user: 'Eric'
		};
	}

	render() {
		return (
			<div className="app">
				<ContextProvider>
					<Header />
				</ContextProvider>
				<Routes />
			</div>
		);
	}
}

export default App;

import React, { Component } from 'react';
import Routes from './routes';
import Header from './components/Header';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			user: 'Eric'
		};
	}

	render() {
		return (
			<div className="app-container">
				<Header />
				<Routes />
			</div>
		);
	}
}

export default App;

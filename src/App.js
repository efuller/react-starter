import React, { Component } from 'react';
import Routes from './routes';
import Header from './components/Header/Header';
import Loading from './components/Common/utility/Loading';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			loading: this.props.loading
		};
	}

	render() {
		return (
			<div className="app">
				{
					this.props.loading ?
						<Loading /> :
						<div>
							<Header loggedIn={this.props.loggedIn} />
							<Routes />
						</div>
				}
			</div>
		);
	}
}

export default App;

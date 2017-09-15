import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Routes from './routes';
import Header from './components/Header/Header';
import Loading from './components/Common/Utility/Loading';

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

App.propTypes = {
	loading: PropTypes.bool.isRequired,
	loggedIn: PropTypes.bool.isRequired
};

App.defaultProps = {
	loading: false,
	loggedIn: false
};

export default App;

import React, { Component, Children } from 'react';
import PropTypes from 'prop-types';

import AuthService from '../services/AuthService';

class Provider extends Component {
	constructor(props) {
		super(props);

		this.state = {
			user: {},
			loggedIn: false
		};

		this.amILoggedIn = this.amILoggedIn.bind(this);
	}

	getChildContext() {
		return {
			user: this.state.user,
			loggedIn: this.state.loggedIn
		};
	}

	componentWillMount() {
		this.amILoggedIn();

		if (AuthService.isUserAuthenticated()) {
			const token = AuthService.getToken();
			AuthService.getUserInfo(token)
				.then((data) => {
					this.setState({
						user: data,
						loggedIn: true
					});
				})
				.catch(() => {
					this.setState({
						user: {},
						loggedIn: false
					});
				});
		}
	}

	amILoggedIn() {
		if (AuthService.isUserAuthenticated()) {
			return this.setState({
				user: this.state.user,
				loggedIn: this.state.loggedIn
			});
		}

		return this.setState({
			user: this.state.user,
			loggedIn: false
		});
	}

	render() {
		const { children } = this.props;
		return Children.only(children);
	}
}

Provider.childContextTypes = {
	user: PropTypes.shape({
		name: PropTypes.string
	}),
	// updateUserInfo: PropTypes.func,
	loggedIn: PropTypes.bool
};

Provider.propTypes = {
	children: PropTypes.element
};

Provider.defaultProps = {
	children: null
};

export default Provider;

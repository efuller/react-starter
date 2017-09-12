import React, { Component, Children } from 'react';
import PropTypes from 'prop-types';

import AuthService from '../services/AuthService';

class Provider extends Component {
	constructor(props) {
		super(props);

		this.state = {
			loading: true,
			user: {},
			loggedIn: false
		};

		//this.amILoggedIn = this.amILoggedIn.bind(this);
		this.updateUserInfo = this.updateUserInfo.bind(this);
	}

	getChildContext() {
		return {
			user: this.state.user,
			loggedIn: this.state.loggedIn,
			updateUserInfo: this.updateUserInfo,
			loading: this.state.loading
		};
	}

	componentWillMount() {
		this.setState({
			loading: true
		});

		if (AuthService.isUserAuthenticated()) {
			const token = AuthService.getToken();
			AuthService.getUserInfo(token)
				.then((data) => {
					this.setState({
						loading: false,
						user: data,
						loggedIn: true
					});
				})
				.catch(() => {
					this.setState({
						loading: false,
						user: {},
						loggedIn: false
					});
				});
		} else {
			this.setState({
				loading: false
			});
		}
	}

	updateUserInfo(userInfo) {
		this.setState({
			user: userInfo.user,
			loggedIn: true,
			loading: false
		});
	}

	// amILoggedIn() {
	// 	if (AuthService.isUserAuthenticated()) {
	// 		return this.setState({
	// 			user: this.state.user,
	// 			loggedIn: this.state.loggedIn,
	// 			loading: false
	// 		});
	// 	}
	//
	// 	return this.setState({
	// 		user: this.state.user,
	// 		loggedIn: false,
	// 		loading: true
	// 	});
	// }

	render() {
		const { children } = this.props;
		return Children.only(children);
	}
}

Provider.childContextTypes = {
	user: PropTypes.shape({
		name: PropTypes.string
	}),
	loading: PropTypes.bool,
	updateUserInfo: PropTypes.func,
	loggedIn: PropTypes.bool
};

Provider.propTypes = {
	children: PropTypes.element
};

Provider.defaultProps = {
	children: null
};

export default Provider;

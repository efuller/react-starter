import React, { Component, Children } from 'react';
import PropTypes from 'prop-types';

class Provider extends Component {
	constructor(props) {
		super(props);

		this.state = {
			userInfo: {}
		};

		this.updateUserInfo = this.updateUserInfo.bind(this);
	}

	getChildContext() {
		return {
			userInfo: this.state.userInfo,
			updateUserInfo: this.updateUserInfo
		};
	}

	updateUserInfo(userInfo) {
		this.setState({ userInfo: userInfo.user });
	}
	render() {
		const { children } = this.props;
		return Children.only(children);
	}
}

Provider.childContextTypes = {
	userInfo: PropTypes.shape({
		name: PropTypes.string
	}),
	updateUserInfo: PropTypes.func
};

Provider.propTypes = {
	children: PropTypes.element
};

Provider.defaultProps = {
	children: null
};

export default Provider;

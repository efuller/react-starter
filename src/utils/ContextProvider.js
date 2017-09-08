import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ContextProvider extends Component {
	render() {
		const childrenWithProps = React.Children.map(this.props.children,
			child => React.cloneElement(child, {
				user: this.context.user,
				loggedIn: this.context.loggedIn,
				updateUserInfo: this.context.updateUserInfo,
				loading: this.context.loading
			})
		);
		return <div>{childrenWithProps}</div>;
	}
}

ContextProvider.propTypes = {
	children: PropTypes.element
};


ContextProvider.defaultProps = {
	children: null
};

ContextProvider.contextTypes = {
	user: PropTypes.shape({
		name: PropTypes.string
	}),
	loading: PropTypes.bool,
	updateUserInfo: PropTypes.func,
	loggedIn: PropTypes.bool
};

export default ContextProvider;

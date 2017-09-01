import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ContextProvider extends Component {
	render() {
		const childrenWithProps = React.Children.map(this.props.children,
			child => React.cloneElement(child, {
				user: this.context.user,
				loggedIn: this.context.loggedIn
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
	loggedIn: PropTypes.bool
};

export default ContextProvider;

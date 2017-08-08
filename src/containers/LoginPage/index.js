import React from 'react';
import PropTypes from 'prop-types';

import LoginForm from '../../components/LoginForm';

const LoginPage = (props, context) => (
	<div>
		<h1>Login Page</h1>
		<LoginForm location={props.location} updateUserInfo={context.updateUserInfo} />
	</div>
);

LoginPage.propTypes = {
	location: PropTypes.shape({
		hash: PropTypes.string
	})
};

LoginPage.defaultProps = {
	location: null
};

LoginPage.contextTypes = {
	userInfo: PropTypes.shape({
		name: PropTypes.string
	}),
	updateUserInfo: PropTypes.func
};

export default LoginPage;

import React from 'react';
import PropTypes from 'prop-types';
import ContextProvider from '../../utils/ContextProvider';

import LoginForm from '../../components/LoginForm/LoginForm';

const LoginPage = (props, context) => (
	<div className="container container-1180 pad-50-0">
		<h1>Login Page</h1>
		<ContextProvider>
			<LoginForm location={props.location} updateUserInfo={context.updateUserInfo} />
		</ContextProvider>
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
//
// LoginPage.contextTypes = {
// 	userInfo: PropTypes.shape({
// 		name: PropTypes.string
// 	}),
// 	updateUserInfo: PropTypes.func
// };

export default LoginPage;

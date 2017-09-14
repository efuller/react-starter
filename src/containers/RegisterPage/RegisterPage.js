import React from 'react';
import PropTypes from 'prop-types';
import ContextProvider from '../../utils/ContextProvider';

import RegisterForm from '../../components/RegisterForm/RegisterForm';

const RegisterPage = (props, context) => (
	<div className="container container--500 pad-50-0">
		<h1 className="text--center">Register</h1>
		<ContextProvider>
			<RegisterForm location={props.location} updateUserInfo={context.updateUserInfo} />
		</ContextProvider>
	</div>
);

RegisterPage.propTypes = {
	location: PropTypes.shape({
		hash: PropTypes.string
	})
};

RegisterPage.defaultProps = {
	location: null
};

export default RegisterPage;

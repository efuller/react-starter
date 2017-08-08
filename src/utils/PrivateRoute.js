import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import AuthService from '../services/AuthService';


const PrivateRoute = ({ component: Component }) => (
	<Route render={props => (
		AuthService.isUserAuthenticated() ? (
			<Component {...props} />
		) : (
			<Redirect to={{
				pathname: '/login',
				state: { from: props.location }
			}}
			/>
		)
	)}
	/>
);

PrivateRoute.propTypes = {
	component: PropTypes.func,
	location: PropTypes.shape({
		state: PropTypes.shape({
			from: PropTypes.shape({
				pathname: PropTypes.string
			})
		})
	})
};

PrivateRoute.defaultProps = {
	component: null,
	location: {}
};

export default PrivateRoute;

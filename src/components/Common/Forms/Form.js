import React from 'react';
import PropTypes from 'prop-types';
import Loading from '../Utility/Loading';

const Form = props => (
	props.loading ?
		<Loading /> :
		<form onSubmit={props.onSubmit}>
			{props.children}
		</form>
);

Form.propTypes = {
	loading: PropTypes.bool.isRequired,
	onSubmit: PropTypes.func.isRequired,
	children: PropTypes.arrayOf(PropTypes.node)
};

Form.defaultProps = {
	children: null,
	loading: false
};

export default Form;

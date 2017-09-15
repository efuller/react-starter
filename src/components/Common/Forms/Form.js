import React from 'react';
import PropTypes from 'prop-types';

const Form = props => (
	<form onSubmit={props.onSubmit}>
		{props.children}
	</form>
);

Form.propTypes = {
	onSubmit: PropTypes.func.isRequired,
	children: PropTypes.arrayOf(PropTypes.node)
};

Form.defaultProps = {
	children: null
};

export default Form;

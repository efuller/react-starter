import React from 'react';
import PropTypes from 'prop-types';

const FormFieldMessage = props => (
	<div className={`message message--form ${props.type}`}>
		<span className="conten">{props.message}</span>
	</div>
);

FormFieldMessage.propTypes = {
	type: PropTypes.string.required,
	message: PropTypes.string.required
};

FormFieldMessage.defaultProps = {
	type: '',
	message: ''
};

export default FormFieldMessage;

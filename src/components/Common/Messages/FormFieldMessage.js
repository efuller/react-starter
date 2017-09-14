import React from 'react';
import PropTypes from 'prop-types';

const FormFieldMessage = props => (
	<div className={`message message--form ${props.type}`}>
		<span className="content">{props.message}</span>
	</div>
);

FormFieldMessage.propTypes = {
	type: PropTypes.string.isRequired,
	message: PropTypes.string.isRequired
};

FormFieldMessage.defaultProps = {
	type: '',
	message: ''
};

export default FormFieldMessage;

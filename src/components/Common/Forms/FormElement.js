import React from 'react';
import PropTypes from 'prop-types';

const FormElement = props => (
	<div>
		<label htmlFor={props.id}>{props.labelText}</label>
		<input
			type={props.type}
			id={props.id}
			name={props.name}
			className={props.className}
			value={props.value}
			onChange={props.onChange}
		/>
	</div>
);

FormElement.propTypes = {
	labelText: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	className: PropTypes.string,
	value: PropTypes.string,
	onChange: PropTypes.func.isRequired
};

FormElement.defaultProps = {
	className: '',
	value: ''
};

export default FormElement;

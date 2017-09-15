import React from 'react';
import PropTypes from 'prop-types';

const FormRow = props => (
	<div className="form-row">
		{props.children}
	</div>
);

FormRow.propTypes = {
	children: PropTypes.arrayOf(PropTypes.node)
};

FormRow.defaultProps = {
	children: null
};

export default FormRow;

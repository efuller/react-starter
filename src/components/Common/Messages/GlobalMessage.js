import React from 'react';
import PropTypes from 'prop-types';

import './mesages.scss';

const GlobalMessage = props => (
	<div className={`message message--global ${props.type}`}>
		<span className="message__content">
			{props.message}
		</span>
	</div>
);

GlobalMessage.propTypes = {
	type: PropTypes.string.required,
	message: PropTypes.string.required
};

GlobalMessage.defaultProps = {
	type: '',
	message: ''
};

export default GlobalMessage;

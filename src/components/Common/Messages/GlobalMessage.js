import React from 'react';
import PropTypes from 'prop-types';

import './messages.scss';

const GlobalMessage = props => (
	<div className={`message message--global ${props.type}`}>
		<span className="message__content">
			{props.message}
		</span>
	</div>
);

GlobalMessage.propTypes = {
	type: PropTypes.string.isRequired,
	message: PropTypes.string.isRequired
};

GlobalMessage.defaultProps = {
	type: '',
	message: ''
};

export default GlobalMessage;

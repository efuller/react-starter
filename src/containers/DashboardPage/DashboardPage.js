import React from 'react';

import ContextProvider from '../../utils/ContextProvider';

const Test = (props) => {
	return (
		<div>{props.loggedIn ? 'Logged In' : 'Not Logged In'}</div>
	);
};

const DashboardPage = () => (
	<ContextProvider>
		<Test />
	</ContextProvider>
);

export default DashboardPage;

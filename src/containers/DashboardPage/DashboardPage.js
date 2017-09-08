import React from 'react';

import ContextProvider from '../../utils/ContextProvider';

const Test = (props) => {
	return (
		<div>{props.loggedIn ? 'Logged In' : 'Not Logged In'}</div>
	);
};

const DashboardPage = () => (
	<div className="row row-1180">
		<h1>Dashboard</h1>
		<ContextProvider>
			<Test />
		</ContextProvider>
	</div>
);

export default DashboardPage;

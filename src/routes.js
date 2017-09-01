import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from './utils/PrivateRoute';
import Main from './components/Main';
import LoginPage from './containers/LoginPage/LoginPage';
import RegisterPage from './containers/RegisterPage/RegisterPage';
import DashboardPage from './containers/DashboardPage/DashboardPage';
import Playground from './containers/Playground';

const Routes = () => (
	<Switch>
		<Route exact path="/" component={Main} />
		<Route path="/login" component={LoginPage} />
		<Route path="/register" component={RegisterPage} />
		<Route path="/playground" component={Playground} />
		<PrivateRoute path="/dashboard" component={DashboardPage} />
	</Switch>
);

export default Routes;

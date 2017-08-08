import React from 'react';
import { Link } from 'react-router-dom';
import './main.scss';

const Main = () => (
	<div className="main">
		<Link to="/login">Login</Link>
		<h1>This is the main component!</h1>
	</div>
);

export default Main;

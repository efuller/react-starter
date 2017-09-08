import React from 'react';
import { Link } from 'react-router-dom';

import './scss/user-menu.scss';

const logout = () => {
	localStorage.removeItem('jwtToken');
	window.location = '/';
};

const UserNav = props => (
	<nav className="nav">
		<ul className="menu menu__user">
			{
				props.loggedIn ?
					<li className="menu__item">
						<Link to="/dashboard">Dashboard</Link>
					</li> : ''
			}
			<li className="menu__item">
				{
					props.loggedIn ?
						<button onClick={logout}>Logout</button> :
						<Link to="/login">Login</Link>
				}
			</li>
		</ul>
	</nav>
);

export default UserNav;

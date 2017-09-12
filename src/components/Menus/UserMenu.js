import React from 'react';
import { NavLink } from 'react-router-dom';

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
						<NavLink to="/dashboard" exact activeClassName="link--active">Dashboard</NavLink>
					</li> : ''
			}
			<li className="menu__item">
				{
					props.loggedIn ?
						<button onClick={logout}>Logout</button> :
						<NavLink to="/login" exact activeClassName="link--active">Login</NavLink>
				}
			</li>
		</ul>
	</nav>
);

export default UserNav;

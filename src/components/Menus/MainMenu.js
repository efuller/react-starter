import React from 'react';
import { NavLink } from 'react-router-dom';

const MainNav = () => (
	<nav className="nav">
		<ul className="menu menu__primary">
			<li className="menu__item">
				<NavLink to="/" exact activeClassName="link--active">Home</NavLink>
			</li>
		</ul>
	</nav>
);

export default MainNav;
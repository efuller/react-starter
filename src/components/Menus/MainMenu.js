import React from 'react';
import { Link } from 'react-router-dom';

const MainNav = () => (
	<nav className="nav">
		<ul className="menu menu__primary">
			<li className="menu__item">
				<Link to="/">Home</Link>
			</li>
		</ul>
	</nav>
);

export default MainNav;
import React from 'react';

import './header.scss';
import MainNav from '../Menus/MainMenu';
import UserNav from '../Menus/UserMenu';

const Header = props => (
	<header className="header header__main">
		<div className="row row-1180 row__flex--space-between">
			<MainNav />
			<UserNav loggedIn={props.loggedIn} />
		</div>
	</header>
);

export default Header;

import React from 'react';

import './header.scss';
import MainNav from '../Menus/MainMenu';
import UserNav from '../Menus/UserMenu';

const Header = props => (
	<header className="header header__main">
		<div className="container container-1180 container__flex--space-between">
			<MainNav />
			<UserNav loggedIn={props.loggedIn} />
		</div>
	</header>
);

export default Header;

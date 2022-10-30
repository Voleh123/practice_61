import React from 'react';

import {menu_item} from './constants';
import MenuItem from './MenuItem';

const Menu = () => (
	<div className="wrapper">
		<div className="header">
			<nav className="header__menu">
				<ul className="menu__list">
					{menu_item.map((item, index) => (
						<MenuItem
							key={index}
							title={item.title}
							link={item.link}
						/>
					))}
				</ul>
			</nav>	
		</div>
	</div>
		
);

export default Menu;
import React, { useState } from 'react';
import './Navbar.css';
import { FiMenu, FiX } from 'react-icons/fi';

const navbarLinks = [
	{ url: '/', title: 'Home' },
	{ url: '#', title: 'About' },
	{ url: '/main', title: 'Dashboard' },
	{ url: '/login', title: 'Login' },

	{ url: '#', title: 'Contact Us' },
];

const Navbar = () => {
	const [menuClicked, setMenuClicked] = useState(false);

	const toggleMenuClick = () => {
		setMenuClicked(!menuClicked);
	};
	return (
		<nav className='navbar'>
			<a href='/'>
				<span className='navbar__logo'>Better</span>
			</a>
			{menuClicked ? (
				<FiX size={25} className={'navbar__menu'} onClick={toggleMenuClick} />
			) : (
				<FiMenu
					size={25}
					className={'navbar__menu'}
					onClick={toggleMenuClick}
				/>
			)}
			<ul
				className={
					menuClicked ? 'navbar__list navbar__list--active' : 'navbar__list'
				}>
				{navbarLinks.map((item, index) => {
					return (
						<li className='navbar__item' key={index}>
							<a className='navbar__link' href={item.url}>
								{item.title}
							</a>
						</li>
					);
				})}
			</ul>
		</nav>
	);
};

export default Navbar;

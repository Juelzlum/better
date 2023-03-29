import React, { useState, useEffect, useContext } from 'react';
import './Navbar.css';
import { FiMenu, FiX } from 'react-icons/fi';
import axios from 'axios';
import UserContext from './userContext';

const Navbar = () => {
	const [menuClicked, setMenuClicked] = useState(false);
	const { userID, setUserID } = useContext(UserContext);

	const toggleMenuClick = () => {
		setMenuClicked(!menuClicked);
	};

	const handleLogout = async () => {
		try {
			await axios.post('/api/auth/logout');
			setUserID(null);
		} catch (error) {
			console.error(error);
		}
	};

	const navbarLinks = userID
		? [
				{ url: '/', title: 'Home' },
				{ url: '/about', title: 'About' },
				{ url: '/dashboard', title: 'Dashboard' },
				{ url: '#', title: 'Logout', onClick: handleLogout },
				{ url: '#', title: 'Contact Us' },
		  ]
		: [
				{ url: '/', title: 'Home' },
				{ url: '/about', title: 'About' },
				{ url: '/login', title: 'Login' },
				{ url: '#', title: 'Contact Us' },
		  ];

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
				{navbarLinks.map((item, index) => (
					<li className='navbar__item' key={index}>
						<a className='navbar__link' href={item.url} onClick={item.onClick}>
							{item.title}
						</a>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default Navbar;

import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { FiMenu, FiX } from 'react-icons/fi';
import axios from 'axios';

const navbarLinks = [
	{ url: '/', title: 'Home' },
	{ url: '/about', title: 'About' },
	{ url: '/dashboard', title: 'Dashboard' },
	{ url: '/login', title: 'Login' },
	{ url: '#', title: 'Contact Us' },
];

const Navbar = () => {
	const [menuClicked, setMenuClicked] = useState(false);
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	const toggleMenuClick = () => {
		setMenuClicked(!menuClicked);
	};

	const fetchData = async () => {
		try {
			// Fetch the user ID from the server (assuming it's stored in a cookie)
			const response = await axios.get('/api/auth/user');
			const userID = response.data.userID;

			// Update the component's state based on whether the user is logged in or not
			if (userID) {
				setIsLoggedIn(true);
			} else {
				setIsLoggedIn(false);
			}
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		fetchData();
	}, []);

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
					if (item.title === 'Login' && isLoggedIn) {
						return (
							<li className='navbar__item' key={index}>
								<a className='navbar__link' href='/logout'>
									Logout
								</a>
							</li>
						);
					} else if (item.title === 'Dashboard' && !isLoggedIn) {
						return null;
					} else if (item.title === 'Login' && !isLoggedIn) {
						return (
							<li className='navbar__item' key={index}>
								<a className='navbar__link' href='/login'>
									Login
								</a>
							</li>
						);
					} else {
						return (
							<li className='navbar__item' key={index}>
								<a className='navbar__link' href={item.url}>
									{item.title}
								</a>
							</li>
						);
					}
				})}
			</ul>
		</nav>
	);
};

export default Navbar;

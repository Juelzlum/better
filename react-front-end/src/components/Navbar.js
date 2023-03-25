import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { FiMenu, FiX } from 'react-icons/fi';
import axios from 'axios';

const Navbar = () => {
	const [menuClicked, setMenuClicked] = useState(false);
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	const toggleMenuClick = () => {
		setMenuClicked(!menuClicked);
	};

	const fetchData = async () => {
		try {
			const response = await axios.get('/api/user');
			const userID = response.data.userId;

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

	const navbarLinks = isLoggedIn
		? [
				{ url: '/', title: 'Home' },
				{ url: '/about', title: 'About' },
				{ url: '/dashboard', title: 'Dashboard' },
				{ url: '/logout', title: 'Logout' },
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
						<a className='navbar__link' href={item.url}>
							{item.title}
						</a>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default Navbar;

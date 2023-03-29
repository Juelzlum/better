import React, { useState, useContext } from 'react';
import './Navbar.css';
import { FiMenu, FiX } from 'react-icons/fi';
import axios from 'axios';
import UserContext from './userContext';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
	const [menuClicked, setMenuClicked] = useState(false);
	const { userID, setUserID, token, setToken } = useContext(UserContext);
	const navigate = useNavigate();

	const toggleMenuClick = () => {
		setMenuClicked(!menuClicked);
	};

	const handleLogout = async () => {
		try {
			await axios.post('/api/auth/logout');
			setUserID(null);
			setToken(null); // Clear the token
			navigate('/'); // Redirect to the home page after successful logout
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
			<Link to='/'>
				<span className='navbar__logo'>Better</span>
			</Link>
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
						<Link className='navbar__link' to={item.url} onClick={item.onClick}>
							{item.title}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default Navbar;

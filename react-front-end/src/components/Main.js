import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReactCalendar from './calendar/Calendar';
import './Main.css';
import Heatcharts from './Heatcharts';
import RadialBar from './RadialBar';
import RadialBar2 from './RadialBar2';
import RadialBar3 from './RadialBar3';

const Main = () => {
	const [userID, setUserID] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get('http://localhost:8080/api/user');
				const userId = response.data.userId;
				setUserID(userId);
			} catch (error) {
				console.error(error);
			}
		};

		fetchData();
	}, []);

	return (
		<div className='main'>
			<h1 className='title'>Dashboard</h1>
			<ReactCalendar />
			<div className='heatchart'>
				<Heatcharts />
			</div>
			<div className='radialBar'>
				<RadialBar userID={userID} />

				<RadialBar2 />
				<RadialBar3 />
			</div>
		</div>
	);
};

export default Main;

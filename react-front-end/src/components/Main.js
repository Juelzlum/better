import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReactCalendar from './calendar/Calendar';
import './Main.css';
import Heatcharts from './Heatcharts';
import RadialBar from './RadialBar';
import RadialBar2 from './RadialBar2';
import RadialBar3 from './RadialBar3';

const Main = () => {
	const [totalPercentage, setTotalPercentage] = useState(0);
	const [userID, setUserID] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				// Fetch the user ID from the server (assuming it's stored in a cookie)
				const response = await axios.get('http://localhost:8080/api/user');
				const userID = response.data.userID;
				setUserID(userID);

				// Fetch the total percentage of goal progress for the user
				const goalsResponse = await axios.get(`/api/goals/${userID}/goals`);
				const totalPercentage = goalsResponse.data.totalPercentage;
				setTotalPercentage(totalPercentage);
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
				{userID && (
					<RadialBar totalPercentage={totalPercentage} userID={userID} />
				)}
				<RadialBar2 />
				<RadialBar3 />
			</div>
		</div>
	);
};

export default Main;

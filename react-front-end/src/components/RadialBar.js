import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';
import axios from 'axios';
import './Heatcharts.css';

const RadialBar = ({ userID }) => {
	const [totalPercentage, setTotalPercentage] = useState(0);

	useEffect(() => {
		const fetchData = async () => {
			try {
				// Fetch the total percentage of goal progress for the user
				const response = await axios.get(`/api/goals/${userID}`);
				const totalPercentage = response.data.totalPercentage;
				setTotalPercentage(totalPercentage);
			} catch (error) {
				console.error(error);
			}
		};

		fetchData();
	}, [userID]);

	const options = {
		colors: ['#6F8FAF', '#141e30'],
		chart: {
			height: 350,
			type: 'radialBar',
		},
		plotOptions: {
			radialBar: {
				hollow: {
					size: '70%',
				},
			},
		},
		labels: ['Total Goals'],
	};

	const series = [totalPercentage];

	return (
		<div className='radialBar'>
			<Chart options={options} series={series} type='radialBar' height={350} />
		</div>
	);
};

export default RadialBar;

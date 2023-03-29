import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import Chart from 'react-apexcharts';
import UserContext from './userContext';

const RadialBar = () => {
	const { userID, token } = useContext(UserContext);
	const [totalPercentage, setTotalPercentage] = useState(0);

	useEffect(() => {
		const fetchData = async () => {
			if (userID) {
				try {
					const response = await axios.get(
						`http://localhost:8080/api/goals/${userID}/progress/weekly`,
						{
							headers: {
								Authorization: token, // Pass the token in the Authorization header
							},
						}
					);
					setTotalPercentage(response.data.totalPercentage);
				} catch (error) {
					console.error(error);
				}
			}
		};

		fetchData();
	}, [userID, token]);

	const options = {
		plotOptions: {
			radialBar: {
				hollow: {
					size: '70%',
				},
			},
		},
		labels: ['Weekly Progress'],
	};

	const series = [totalPercentage];

	return (
		<div>
			<Chart options={options} series={series} type='radialBar' height='350' />
		</div>
	);
};

export default RadialBar;

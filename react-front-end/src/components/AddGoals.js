import React, { useState, useContext } from 'react';
import './HabitTracker.css';
import { useNavigate } from 'react-router-dom';
import UserContext from './userContext';

const AddGoals = () => {
	const navigate = useNavigate();
	const { userID, token } = useContext(UserContext);
	const [water, setWater] = useState(false);
	const [sleep, setSleep] = useState(false);
	const [stress, setStress] = useState(false);
	const [tired, setTired] = useState(false);
	const [goalEndDate, setGoalEndDate] = useState(30);

	const handleWater = (value) => {
		setWater(value);
	};

	const handleSleep = (value) => {
		setSleep(value);
	};

	const handleStress = (value) => {
		setStress(value);
	};

	const handleTired = (value) => {
		setTired(value);
	};

	const handleGoalEndDate = (value) => {
		setGoalEndDate(value);
	};

	const addGoal = async (
		userId,
		startDate,
		endDate,
		water,
		sleep,
		stress,
		tired
	) => {
		const response = await fetch(`/api/goals/${userId}/add-goal`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${token}`,
			},
			body: JSON.stringify({
				user_id: userId,
				start_date: startDate.toISOString(),
				end_date: endDate.toISOString(),
				drank_water_goal: water,
				did_sleep_goal: sleep,
				is_stressed_goal: stress,
				is_tired_goal: tired,
			}),
		});

		if (!response.ok) {
			throw new Error('Failed to add goal');
		}

		return response.json();
	};

	const handleSubmit = async () => {
		const startDate = new Date();
		const endDate = new Date();
		endDate.setDate(startDate.getDate() + goalEndDate);

		await addGoal(userID, startDate, endDate, water, sleep, stress, tired);
		navigate('/dashboard');
	};
	return (
		<div className='habit-tracker'>
			<h2>Choose your goal end date:</h2>
			<div className='habit-tracker__toggle'>
				<button
					className={`habit-tracker__toggle__button ${
						goalEndDate === 30 && 'selected'
					}`}
					onClick={() => handleGoalEndDate(30)}>
					30 Days
				</button>
				<button
					className={`habit-tracker__toggle__button ${
						goalEndDate === 90 && 'selected'
					}`}
					onClick={() => handleGoalEndDate(90)}>
					90 Days
				</button>
				<button
					className={`habit-tracker__toggle__button ${
						goalEndDate === 365 && 'selected'
					}`}
					onClick={() => handleGoalEndDate(365)}>
					365 Days
				</button>
			</div>
			<h2>Track Water Intake?</h2>
			<div className='habit-tracker__toggle'>
				<button
					className={`habit-tracker__toggle__button ${
						water === true && 'selected'
					}`}
					onClick={() => handleWater(true)}>
					Yes
				</button>
				<button
					className={`habit-tracker__toggle__button ${
						water === false && 'selected'
					}`}
					onClick={() => handleWater(false)}>
					No
				</button>
			</div>
			<h2>Track Sleep?</h2>
			<div className='habit-tracker__toggle'>
				<button
					className={`habit-tracker__toggle__button ${
						sleep === true && 'selected'
					}`}
					onClick={() => handleSleep(true)}>
					Yes
				</button>
				<button
					className={`habit-tracker__toggle__button ${
						sleep === false && 'selected'
					}`}
					onClick={() => handleSleep(false)}>
					No
				</button>
			</div>
			<h2>Track Stress?</h2>
			<div className='habit-tracker__toggle'>
				<button
					className={`habit-tracker__toggle__button ${
						stress === true && 'selected'
					}`}
					onClick={() => handleStress(true)}>
					Yes
				</button>
				<button
					className={`habit-tracker__toggle__button ${
						stress === false && 'selected'
					}`}
					onClick={() => handleStress(false)}>
					No
				</button>
			</div>
			<h2>Track Tiredness?</h2>
			<div className='habit-tracker__toggle'>
				<button
					className={`habit-tracker__toggle__button ${
						tired === true && 'selected'
					}`}
					onClick={() => handleTired(true)}>
					Yes
				</button>
				<button
					className={`habit-tracker__toggle__button ${
						tired === false && 'selected'
					}`}
					onClick={() => handleTired(false)}>
					No
				</button>
			</div>

			<button
				className='habit-tracker__submit-button'
				type='submit'
				onClick={handleSubmit}>
				Submit
			</button>
		</div>
	);
};

export default AddGoals;

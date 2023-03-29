import React, { useState } from 'react';
import './HabitTracker.css';
import { useNavigate } from 'react-router-dom';

const HabitTracker = () => {
	const navigate = useNavigate();
	const [water, setWater] = useState(null);
	const [sleep, setSleep] = useState(null);
	const [exercise, setExercise] = useState(null);
	const [eat, setEat] = useState(null);
	const [showNotice, setShowNotice] = useState(false);

	const handleWater = (value) => {
		setWater(value);
	};

	const handleSleep = (value) => {
		setSleep(value);
	};

	const handleExercise = (value) => {
		setExercise(value);
	};

	const handleEat = (value) => {
		setEat(value);
	};

	const handleSubmit = () => {
		setShowNotice(true);

		setTimeout(() => {
			navigate('/dashboard');
		}, 500);
	};

	return (
		<div className='habit-tracker'>
			<h2>Did you drink enough water?</h2>
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
			<h2>Did you sleep enough?</h2>
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
			<h2>Did you exercise?</h2>
			<div className='habit-tracker__toggle'>
				<button
					className={`habit-tracker__toggle__button ${
						exercise === true && 'selected'
					}`}
					onClick={() => handleExercise(true)}>
					Yes
				</button>
				<button
					className={`habit-tracker__toggle__button ${
						exercise === false && 'selected'
					}`}
					onClick={() => handleExercise(false)}>
					No
				</button>
			</div>
			<h2>Did you eat the right amount?</h2>
			<div className='habit-tracker__toggle'>
				<button
					className={`habit-tracker__toggle__button ${
						eat === true && 'selected'
					}`}
					onClick={() => handleEat(true)}>
					Yes
				</button>
				<button
					className={`habit-tracker__toggle__button ${
						eat === false && 'selected'
					}`}
					onClick={() => handleEat(false)}>
					No
				</button>
			</div>
			{showNotice && (
				<div className='habit-tracker__notice'>Form submitted!</div>
			)}
			<button
				className='habit-tracker__submit-button'
				type='submit'
				onClick={handleSubmit}>
				Submit
			</button>
		</div>
	);
};

export default HabitTracker;

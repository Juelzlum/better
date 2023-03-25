import React from 'react';
import Calendar from 'react-calendar';
import './Calendar.css';
import { useNavigate } from 'react-router-dom';

const ReactCalendar = () => {
	const navigate = useNavigate();

	const handleNavigate = (selectedDate) => {
		navigate('/habittracker');
	};

	return (
		<div className='calendar'>
			<Calendar onChange={(selectedDate) => handleNavigate(selectedDate)} />
			<form></form>
		</div>
	);
};

export default ReactCalendar;

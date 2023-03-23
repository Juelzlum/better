import React from 'react';
import ReactCalendar from './calendar/Calendar';
import './Main.css';
import Heatchart from './Heatchart';
const Main = () => {
	return (
		<div className='main'>
			<h1 className='title'>Better</h1>
			<ReactCalendar />
			<Heatchart />
		</div>
	);
};

export default Main;

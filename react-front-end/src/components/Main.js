import React from 'react';
import ReactCalendar from './calendar/Calendar';
import './Main.css';
import Heatcharts from './Heatcharts';
const Main = () => {
	return (
		<div className='main'>
			<ReactCalendar />

			<Heatcharts />
		</div>
	);
};

export default Main;

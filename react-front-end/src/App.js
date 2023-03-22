import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import HabitTracker from './components/HabitTracker';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			message: 'Better',
		};
	}

	fetchData = () => {
		axios
			.get('/api/data') // You can simply make your requests to "/api/whatever you want"
			.then((response) => {
				// handle success
				console.log(response.data); // The entire response from the Rails API

				console.log(response.data.message); // Just the message
				this.setState({
					message: response.data.message,
				});
			});
	};

	render() {
		return (
			<div className='App'>
				<Router>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/login' element={<Login />} />
            <Route path='/HabitTracker' element={<HabitTracker/>}></Route>
					</Routes>
				</Router>
			</div>
		);
	}
}

export default App;

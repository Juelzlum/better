import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import Main from './components/Main';
import Navbar from './components/Navbar';
import Report from './components/report-totals/Report';
import HabitTracker from './components/HabitTracker';
import About from './components/About';
import UserContext from './components/userContext';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			message: 'Better',
			userID: null,
			token: null, // Add the token state here
		};
	}

	componentDidMount() {
		axios
			.get('/api/user')
			.then((response) => {
				const userID = response.data.userId;
				this.setState({ userID });
			})
			.catch((error) => console.error(error));
	}

	render() {
		const { userID, token } = this.state;
		return (
			<UserContext.Provider
				value={{
					userID,
					setUserID: (id) => this.setState({ userID: id }),
					token, // Pass the token value to the context
					setToken: (token) => this.setState({ token }), // Pass the token setter to the context
				}}>
				<div className='App'>
					<Router>
						<Navbar />
						<Routes>
							<Route path='/' element={<Home />} />
							<Route path='/login' element={<Login />} />
							<Route path='/about' element={<About />} />
							<Route path='/dashboard' element={<Main />} />
							<Route path='/report' element={<Report />} />
							<Route path='/habittracker' element={<HabitTracker />}></Route>
						</Routes>
					</Router>
				</div>
			</UserContext.Provider>
		);
	}
}

export default App;

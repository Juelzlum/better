import React, { useState } from 'react';
import './Login.css';
function Login() {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const handleLogin = (event) => {
		event.preventDefault();
	};

	return (
		<form onSubmit={handleLogin}>
			<label>
				Username:
				<input
					type='text'
					value={username}
					onChange={(event) => setUsername(event.target.value)}
				/>
			</label>
			<br />
			<label>
				Password:
				<input
					type='password'
					value={password}
					onChange={(event) => setPassword(event.target.value)}
				/>
			</label>
			<br />
			<button type='submit'>Log in</button>
		</form>
	);
}
export default Login;

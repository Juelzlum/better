import React, { useState } from 'react';
import { FiFacebook, FiGithub, FiChrome } from 'react-icons/fi';
import './Login.css';
import { useNavigate } from 'react-router-dom';

/**
 * Renders the login form. You can use this form to create a social account or to log in to a third party.
 *
 *
 * @return { JSX. Element } The login form as a JSX Element. If the user is already logged in this will return undefined
 */

function Login() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [showSignup, setShowSignup] = useState(false);

	const navigate = useNavigate();

	const handleSignup = async (event) => {
		event.preventDefault();
		// Add form data for sending a request to the backend
		const formData = new FormData(event.target);
		const data = Object.fromEntries(formData);

		try {
			const response = await fetch('http://localhost:8080/api/auth/signup', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(data),
			});

			if (response.ok) {
				const responseData = await response.json();
				console.log(responseData);
				navigate('/dashboard');
			} else {
				const error = await response.json();
				alert(error.message);
			}
		} catch (err) {
			console.error(err);
			alert('Error signing up. Please try again.');
		}
	};

	const handleLogin = async (event) => {
		event.preventDefault();
		const formData = new FormData(event.target);
		const data = Object.fromEntries(formData);

		try {
			const response = await fetch('http://localhost:8080/api/auth/login', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(data),
			});

			if (response.ok) {
				const responseData = await response.json();
				console.log(responseData);
				navigate('/dashboard');
			} else {
				const error = await response.json();
				alert(error.message);
			}
		} catch (err) {
			console.error(err);
			alert('Error logging in. Please try again.');
		}
	};
	return (
		<fragment>
			<div class='login'>
				<div
					class={`container ${showSignup ? 'right-panel-active' : ''}`}
					id='container'>
					<div class='form-container sign-up-container'>
						<form class='create' onSubmit={handleSignup}>
							<h1>Create Account</h1>
							<div class='social-container'>
								<div>
									<FiFacebook size={25} />
								</div>
								<div>
									<FiGithub size={25} />
								</div>
								<div>
									<FiChrome size={25} />
								</div>
							</div>
							<span>or use your email for registration</span>
							<div class='infield'></div>
							<div class='infield'>
								<input type='email' placeholder='Email' name='email' />
								<label></label>
							</div>
							<div class='infield'>
								<input type='password' placeholder='Password' name='password' />
								<label></label>
							</div>
							<button>Sign Up</button>
						</form>
					</div>
					<div class='form-container sign-in-container'>
						<form onSubmit={handleLogin}>
							<h1>Sign in</h1>
							<div class='social-container'>
								<div>
									<FiFacebook size={25} />
								</div>
								<div>
									<FiGithub size={25} />
								</div>
								<div>
									<FiChrome size={25} />
								</div>
							</div>
							<span>or use your account</span>
							<div class='infield'>
								<input
									type='email'
									placeholder='username'
									name='email'
									value={email}
									onChange={(event) => setEmail(event.target.value)}
								/>
								<label></label>
							</div>
							<div class='infield'>
								<input
									type='password'
									placeholder='Password'
									name='password'
									value={password}
									onChange={(event) => setPassword(event.target.value)}
								/>
								<label></label>
							</div>
							<a href='/login' class='forgot'>
								Forgot your password?
							</a>
							<button>Sign In</button>
						</form>
					</div>
					<div class='overlay-container' id='overlayCon'>
						<div class='overlay'>
							<div class='overlay-panel overlay-left'>
								<h1>Welcome Back!</h1>
								<p>
									To keep connected with us please login with your personal info
								</p>
								<button>Sign In</button>
							</div>
							<div class='overlay-panel overlay-right'>
								<h1>Welcome!</h1>
								<p>
									Enter your personal details and start your journey with us
								</p>
								<button>Sign Up</button>
							</div>
						</div>
						<button
							onClick={() => setShowSignup((prev) => !prev)}
							id='overlayBtn'></button>
					</div>
				</div>
			</div>
		</fragment>
	);
}
export default Login;

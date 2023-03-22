import React, { useState } from 'react';
import { FiFacebook, FiGithub, FiChrome } from 'react-icons/fi';
import './Login.css';
import Navbar from './Navbar';
function Login() {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [showLogin, setShowLogin] = useState(false);

	const handleLogin = (event) => {
		event.preventDefault();
	};

	return (
		<fragment>
			<body class='login'>
				<div class='container' id='container'>
					<div class='form-container sign-up-container'>
						<form action='#'>
							<h1>Create Account</h1>
							<div class='social-container'>
								<a href='#' class='social'>
									<i class='fab fa-facebook-f'></i>
								</a>
								<a href='#' class='social'>
									<i class='fab fa-google-plus-g'></i>
								</a>
								<a href='#' class='social'>
									<i class='fab fa-linkedin-in'></i>
								</a>
							</div>
							<span>or use your email for registration</span>
							<div class='infield'>
								<input type='text' placeholder='Name' />
								<label></label>
							</div>
							<div class='infield'>
								<input type='email' placeholder='Email' name='email' />
								<label></label>
							</div>
							<div class='infield'>
								<input type='password' placeholder='Password' />
								<label></label>
							</div>
							<button>Sign Up</button>
						</form>
					</div>
					<div class='form-container sign-in-container'>
						<form action='#'>
							<h1>Sign in</h1>
							<div class='social-container'>
								<a>
									<FiFacebook size={25} />
								</a>
								<a>
									<FiGithub size={25} />
								</a>
								<a>
									<FiChrome size={25} />
								</a>
							</div>
							<span>or use your account</span>
							<div class='infield'>
								<input type='email' placeholder='Email' name='email' />
								<label></label>
							</div>
							<div class='infield'>
								<input type='password' placeholder='Password' />
								<label></label>
							</div>
							<a href='#' class='forgot'>
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
						<button id='overlayBtn'></button>
					</div>
				</div>
			</body>
		</fragment>
	);
}
export default Login;

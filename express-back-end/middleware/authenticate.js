const authenticate = (req, res, next) => {
	// Get the token from the Authorization header
	const token = req.header('Authorization');

	// If there's no token, return an unauthorized response
	if (!token) {
		return res.status(401).json({ message: 'Unauthorized: No token provided' });
	}

	// You would normally verify the token here, e.g., with JWT
	// For this example, we'll just pass the token to the request object and call next()
	req.token = token;
	next();
};

module.exports = authenticate;

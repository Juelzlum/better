const express = require('express');
const bcrypt = require('bcrypt');
const db = require('../db/connection');
const {
	createUserQuery,
	getUserByEmailQuery,
} = require('../db/queries/userQueries');
const router = express.Router();

router.post('/signup', async (req, res) => {
	const { email, password } = req.body;

	try {
		const existingUser = await db.query(getUserByEmailQuery, [email]);

		if (existingUser.rows.length > 0) {
			return res
				.status(400)
				.json({ message: 'User with this email already exists.' });
		}

		const hashedPassword = await bcrypt.hash(password, 10);
		const newUser = await db.query(createUserQuery, [email, hashedPassword]);

		req.session.userId = newUser.rows[0].user_id;
		res.status(201).json(newUser.rows[0]);
	} catch (err) {
		console.error(err);
		res.status(500).json({ message: 'Internal server error.' });
	}
});

router.post('/login', async (req, res) => {
	try {
		const { email, password } = req.body;

		// Check if email and password are valid
		const user = await db.query(getUserByEmailQuery, [email]);

		if (user.rows.length === 0) {
			return res.status(401).json({ message: 'Invalid email or password' });
		}

		const isPasswordValid = await bcrypt.compare(
			password,
			user.rows[0].password
		);

		if (!isPasswordValid) {
			return res.status(401).json({ message: 'Invalid email or password' });
		}

		// Set the user ID in the session
		req.session.userId = user.rows[0].user_id;

		res.json({ userId: user.rows[0].user_id });
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: 'Internal server error' });
	}
});

router.post('/logout', async (req, res) => {
	req.session = null;
	res.status(200).json({ message: 'Logged out successfully.' });
});

module.exports = router;

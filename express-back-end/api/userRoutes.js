const express = require('express');
const router = express.Router();
const db = require('../db/connection');
const { getUserByIdQuery } = require('../db/queries/userQueries');

router.get('/', async (req, res) => {
	if (req.session.userId) {
		try {
			const user = await db.query(getUserByIdQuery, [req.session.userId]);
			if (user.rows.length > 0) {
				res.status(200).json({ userId: user.rows[0].user_id });
			} else {
				res.status(404).json({ message: 'User not found.' });
			}
		} catch (err) {
			console.error(err);
			res.status(500).json({ message: 'Internal server error.' });
		}
	} else {
		res.json({ userId: null });
	}
});

module.exports = router;

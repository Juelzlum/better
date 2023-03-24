const express = require('express');
const router = express.Router();
const db = require('../db/connection');
const { getGoalByUser } = require('../db/queries/getGoalByUser');

router.get('/:user_id/goals', async (req, res) => {
	try {
		const { user_id } = req.params;

		const result = await db.query(getGoalByUser, [user_id]);

		if (result.rows.length > 0) {
			res.status(200).json(result.rows[0]);
		} else {
			res
				.status(404)
				.json({ message: 'Goal not found for the given user ID.' });
		}
	} catch (err) {
		console.error(err);
		res.status(500).json({ message: 'Internal server error.' });
	}
});

module.exports = router;

const express = require('express');
const router = express.Router();
const db = require('./db/connection');
const { addGoalProgress } = require('./db/queries/addGoalProgress');
const { getGoalByUser } = require('./db/queries/userQueries');

router.post('/api/add-progress', async (req, res) => {
	try {
		const { goal_id, drank_water, did_sleep, is_stressed, is_tired } = req.body;

		await db.query(addGoalProgress, [
			goal_id,
			drank_water,
			did_sleep,
			is_stressed,
			is_tired,
		]);

		res.status(200).json({ message: 'Progress added ' });
	} catch (err) {
		console.error(err);
		res.status(500).json({ message: 'error.' });
	}
});

module.exports = router;

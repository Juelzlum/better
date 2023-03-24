const express = require('express');
const router = express.Router();

router.get('/user', (req, res) => {
	if (req.session.userId) {
		res.json({ userId: req.session.userId });
	} else {
		res.json({ userId: null });
	}
});

module.exports = router;

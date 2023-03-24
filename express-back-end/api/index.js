const express = require('express');
const router = express.Router();
const authRoutes = require('./authRoutes');
// Import your API route handlers
const goalRoutes = require('./goalRoutes');

router.use('/goals', goalRoutes);
router.use('/auth', authRoutes);

module.exports = router;

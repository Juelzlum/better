const express = require('express');
const router = express.Router();
const authRoutes = require('./authRoutes');
const userRoutes = require('./userRoutes');
const goalRoutes = require('./goalRoutes');

router.use('/goals', goalRoutes);
router.use('/auth', authRoutes);
router.use('/user', userRoutes);

module.exports = router;

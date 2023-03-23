
const express = require('express');
const { reset } = require('nodemon');
const router = express.Router();
// const cookieSession = require('cookie-session');
const db = require('../db/connection');



router.get('/' , (req,res) => {
  res.send('Im HERE')
})

module.exports = router;
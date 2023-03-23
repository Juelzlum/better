const express = require('express');
const { reset } = require('nodemon');
const router = express.Router();
// const cookieSession = require('cookie-session');
const db = require('../db/connection');
const { route } = require('./login');

router.post('/habitTracker', (req, res) => {
 const id = 1
 const enoughWater = false
 const enoughSleep = false
 const stress =  false
 const tired = false 

 const newTrack = {
  id, 
  enoughWater,
  enoughSleep,
  stress,
  tired
 }
 
 res.status(201).send(newTrack);
}) 

module.exports = router
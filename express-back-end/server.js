require('dotenv').config();
const Express = require('express');
const App = Express();
const BodyParser = require('body-parser');
const PORT = 8080;
const connection = require('./db/connection.js');
const cors = require('cors')

// Express Configuration
App.use(BodyParser.urlencoded({ extended: false }));
App.use(BodyParser.json());
App.use(Express.static('public'));

const login = require('./routes/login');
const habitTracker = require('./routes/habitTracker');
const db = require('./db/connection.js');


App.use('/login', login);
App.use('/habitTracker', habitTracker )
App.use(cors({
  origin: 'http://localhost:3003',
  optionsSuccessStatus: 200,
})); 

App.get('/api/data', (req, res) => {
	connection.query('SELECT * FROM stats').then((data) => {
		res.json(data.rows);
	});
});
 
App.put('/api/data', (req,res) => {
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
  return connection.query(`INSERT INTO stats(days_id, enough_water, enough_sleep, stress, tired) VALUES ($1, $2, $3, $4, $5) returning *;`, [days_id,enough_water, enough_sleep, stress, tired ])
  .then(data => {
    console.log("queries", data.rows)
    return data.rows
  }) 
})

App.listen(PORT, () => {
	// eslint-disable-next-line no-console
	console.log(
		`Express seems to be listening on port ${PORT} so that's pretty good 👍`
	);
});

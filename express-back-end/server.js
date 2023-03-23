require('dotenv').config();
const Express = require('express');
const App = Express();
const BodyParser = require('body-parser');
const PORT = 8080;
const connection = require('./db/connection.js');

// Express Configuration
App.use(BodyParser.urlencoded({ extended: false }));
App.use(BodyParser.json());
App.use(Express.static('public'));

const login = require('./routes/login');
const habitTracker = require('./routes/habitTracker')


App.use('/login', login);
App.use('/habitTracker',habitTracker )


App.get('/api/data', (req, res) => {
	connection.query('SELECT * FROM stats').then((data) => {
		res.json(data.rows);
	});
});

App.listen(PORT, () => {
	// eslint-disable-next-line no-console
	console.log(
		`Express seems to be listening on port ${PORT} so that's pretty good 👍`
	);
});

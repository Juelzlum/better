require('dotenv').config();
const Express = require('express');
const App = Express();
const BodyParser = require('body-parser');
const PORT = 8080;
const db = require('./db/connection.js');
const routes = require('./routes');
const apiRoutes = require('./api');
const cors = require('cors');

// Express Configuration
App.use(BodyParser.urlencoded({ extended: false }));
App.use(BodyParser.json());
App.use(Express.static('public'));
//middleware
App.use(cors());
App.use('/api', apiRoutes);
//routes are in routes.js
App.use(routes);

App.listen(PORT, () => {
	// eslint-disable-next-line no-console
	console.log(
		`Express seems to be listening on port ${PORT} so that's pretty good 👍`
	);
});

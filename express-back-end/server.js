require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const cors = require('cors');
const routes = require('./routes');
const apiRoutes = require('./api');

const app = express();
const PORT = 8080;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(
	cookieSession({
		name: 'session',
		keys: ['banana'],
		maxAge: 24 * 60 * 60 * 1000, // Cookie expires after 24 hours
		sameSite: 'strict',
		httpOnly: true,
	})
);

app.use(
	cors({
		origin: 'http://localhost:3000', // Replace this with your client's origin
		credentials: true,
	})
);
app.use('/api', apiRoutes);
app.use(routes);

app.listen(PORT, () => {
	console.log(`Express server is listening on port ${PORT}`);
});

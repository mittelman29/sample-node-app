var mainRouter = require('./routes/routes');
var auth = require('./controllers/authController');
const express = require('express')
const app = express()
const port = 8080

// Add Auth Middleware Here
app.use((req, res, next) => auth.authenticate(req, res, next));

// Add DB Connection Here

// Use the router file
app.use('/', mainRouter);

app.listen(port, () => {
	console.log(`Dave is listening on port ${port}!`);
});

module.exports = app;

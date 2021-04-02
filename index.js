var mainRouter = require('./routes/routes');
var auth = require('./middleware/authMiddleware');
var db = require('./middleware/dbMiddleware');
const express = require('express')
const app = express()
const port = 8080

// Add Auth Middleware Here
app.use((req, res, next) => auth.authenticate(req, res, next));

// Add DB Connection Here
dbHandler = db.getDB();

// Use the router file
app.use('/', mainRouter);

app.listen(port, () => {
	console.log(`Dave is listening on port ${port}!`);
});

module.exports = app;

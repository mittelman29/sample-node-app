var mainRouter = require('./routes/routes');

const express = require('express')
const app = express()
const port = 8080

// Add Auth Middleware Here

// Add DB Connection Here

// Use the router file
app.use('/', mainRouter);

app.listen(port, () => {
	console.log(`Dave is listening on port ${port}!`);
});

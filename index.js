var controllers = require('./controllers/mainController');

const express = require('express')
const app = express()
const port = 8080

// Add Auth Middleware Here

// Add DB Connection Here

// Add Routes (To be replaced by routing file later)
// Summary Endpoint
// URL: /
app.get('/', (req, res) => {
	return controllers.summary(req, res);
});

// Detail Endpoint
// URL: /:id
app.get('/:id', (req, res) => {
	return controllers.detail(req, res);
});

// Create Endpoint
// URL: /new
app.post('/', (req, res) => {
	return controllers.create(req, res);
});

// Delete Endpoint
// URL: /:id
app.delete('/:id', (req, res) => {
	return controllers.delete(req, res);
});

app.listen(port, () => {
	console.log(`Dave is listening on port ${port}!`);
});

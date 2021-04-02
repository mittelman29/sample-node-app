var express = require('express');
var router = express.Router();

var controllers = require('../controllers/mainController');

// Summary Endpoint
// URL: /
router.get('/', (req, res) => {
	return controllers.summary(req, res);
});

// Detail Endpoint
// URL: /:id
router.get('/:id', (req, res) => {
	return controllers.detail(req, res);
});

// Create Endpoint
// URL: /new
router.post('/', (req, res) => {
	return controllers.create(req, res);
});

// Delete Endpoint
// URL: /:id
router.delete('/:id', (req, res) => {
	return controllers.delete(req, res);
});

module.exports = router;
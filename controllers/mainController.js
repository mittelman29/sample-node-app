// Main Controller File
//
// Basic CRUD controllers for the dave widgets
var db = require('../middleware/dbMiddleware');

// 1. Summary Endpoint
// 	METHOD: GET
// 	ARGUMENTS: None
// 	RETURN: List of Objects
exports.summary = (req, res) => {
	db.getDB();
	res.send("Summary Controller");
};

// 2. Detail Endpoint
// 	METHOD: GET
// 	ARGUMENTS:
// 		1. id - INT
// 	RETURNS: Dave Object
exports.detail = (req, res) => {
	db.getDB();
	res.send(`Detail Controller: ${req.params.id}`);
};

// 3. Create Endpoint
// 	METHOD: POST
// 	ARGUMENTS: 
//		1. Age - INT
// 		2. Location - String
// 	RETURNS:
//		1. DB Record ID - INT
exports.create = (req, res) => {
	db.getDB();
	res.send("Create Controller");
};

// 4. Delete Endpoint
// 	METHOD: DELETE
// 	ARGUMENTS:
//		1. id - INT
// 	RETURNS:
//		1. Success - 200
//		2. Failure - 4xx or 5xx
exports.delete = (req, res) => {
	db.getDB();
	res.send(`Delete Controller: ${req.params.id}`);
};

const express = require('express')
const app = express()
const port = 8080

app.get('/', (req, res) => {
	res.send("Hey, welcome!");
});

app.listen(port, () => {
	console.log(`Dave is listening on port ${port}!`);
});

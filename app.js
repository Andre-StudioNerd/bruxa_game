const express = require('express');
const fs = require('fs');
const port = 8000;


const app = express();

app.use(express.static('game'));




app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/game/index.html'));
});

app.listen(port, function(error) {

	if (error) {
		console.log('Error: ', error)
	} else {
		console.log('Server runnng on port: ' + port)
	}
})
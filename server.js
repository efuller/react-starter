const path = require('path');
const express = require('express');

// Create out app.
const app = express();

// Set out port.
const port = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, 'dist')));

app.get('*', (req, res) => {
	res.sendFile(path.resolve(__dirname, 'dist/index.html'));
});

app.listen(port, error => (error ? console.log(error) : console.log('Express is running on port', port)));

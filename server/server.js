const path = require('path');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// set path to public folder
const publicPath = path.join(__dirname, '..', 'public');

// serve public folder
app.use(express.static(publicPath));

// serve index.html if request is not in the public folder
app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
});

// start server
app.listen(port, () => {
    console.log('server is running...');
});
const express = require('express');
const path = require('path')
var app = express();
app.use(express.static(path.join(__dirname, './')));
// NODE_ENV === 'production'
const PORT = process.env.NODE_ENV || 8080;

app.listen(PORT, function () {
    console.log('Express server is up on port ' + PORT);
});
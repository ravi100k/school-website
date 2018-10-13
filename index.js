const path = require('path')
const express = require('express');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, './')));

app.listen(PORT, ()=> {
    console.log('Express server is up on port ' + PORT);
});
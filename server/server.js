const express = require('express');
const path = require('path');

const port = process.env.port || 3000;
publicPath = path.join(__dirname + '/../public');

var app = express();

app.use(express.static(publicPath))


app.listen(3000, () => {
    console.log(`Listening on port ${port}`);
})
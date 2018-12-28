const express = require('express');
const path = require('path');

console.log(__dirname)

const port = process.env.PORT || 3000;
publicPath = path.join(__dirname, '../public');

var app = express();

app.use(express.static(publicPath))


app.listen(3000, () => {
    console.log(`Listening on port ${port}`);
})

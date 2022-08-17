const express = require('express');
const app = express();
const { seedElements } = require('./utils');

const PORT = process.env.PORT || 4001;

const expressions = [];
seedElements(expressions, 'expressions');
//this lets you reload the page on save!
app.use(express.static('public'));

app.get('/expressions', (req, res, next) => {
    //console.log(req);
    res.send(expressions);
})
app.get('*', (req, res, next) => {
    res.send("Page not found. Home-><a href='/expressions'>HOME</a>");
})
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
})
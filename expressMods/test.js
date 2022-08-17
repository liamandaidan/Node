const express = require('express');
const app = express();
 
const port = 8000;
 
const expressIs = ['fun', 'rewarding', 'servertastic'];
 
app.get('/', (req, res, next) => {
  res.send(expressIs);
});
 
app.listen(port);
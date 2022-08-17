const express = require('express');
const app = express();

const PORT = process.env.PORT || 4001;

const soups = ['gazpacho', 'borscht', 'primordial', 'avgolemono', 'laksa'];

app.post('/soups', (req, res, next) => {
  const soup = req.query;
 // console.log(soup.name); 
  if(soup){
    soups.push(soup.name);
    res.status(201).send(soups);
  }else{
    res.status(404).send();
  }
})


app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});


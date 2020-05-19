const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('hi there');
});


app.get('/bye', (req, res) => {
  res.send('BYE THERE');
});


app.listen(8000, () =>{
  console.log('hi im in a container')
});
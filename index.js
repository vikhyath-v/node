const express = require('express');
const app = express();
const port =  process.env.PORT||4000; // Use process.env.PORT or default to 4000

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/twitter', (req, res) => {
  res.send('vikhyath');
});

app.get('/login', (req, res) => {
  res.send('<h1>llll </h1>');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

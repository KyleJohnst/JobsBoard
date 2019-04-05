const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fetch = require('node-fetch');
const serveStatic = require('serve-static');

const cors = require("cors");

app.use(cors())
app.use(bodyParser.json());
app.use(serveStatic(__dirname + "/dist"));

// app.get('/jobs', (req, res) => {
//     const url = 'https://remoteok.io/api?ref=producthunt';
//   fetch(url)
//   .then(jsonData => jsonData.json())
//   // .then(data => console.log(data));
//   .then(data => res.json(data));
//
// });

app.listen(process.env.Port || 3000, function() {
  console.log(`jobs ${this.address().port}`);
});

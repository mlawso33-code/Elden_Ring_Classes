const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config({ path: './config.env'});
const port = process.env.PORT || 3000;
const routes = require('./routes/classes.js');
app.use(cors());
app.use(express.json());
app.use('/', routes);


const dbo = require('./db/conn.js');

app.listen(port, () => {
  dbo.connectToServer(function (err) {
    err ? console.log(`There is an error: ${err}`) : console.log(`Connected to ${port}!`);
  });
});
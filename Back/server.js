const express = require('express')
const bodyParser = require('body-parser')
const Cors = require('cors')
const app = express();
const API_PORT = process.env.API_PORT || 4242;

app.use(Cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());

require('./Routes/conv')(app);

app.listen(API_PORT, () =>
    console.log(`Listening on port ${API_PORT}`));
module.exports = app;
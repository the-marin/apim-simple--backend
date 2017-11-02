"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const port = 8080;
const name = "backend";

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get('/api/hello', function (req, res) {
    res.status(200).send("Hello World");  
  });

app.listen(port, function () {
    console.log(name + " started on port:", port);
});

module.exports = app;   
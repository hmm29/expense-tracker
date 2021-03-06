// import node modules and initialize express
const express = require('express'),
      app = express(),
      bodyParser = require('body-parser'),
      mongoose = require('mongoose'),
      logger = require('morgan'),
      config = require('./config/main'),
      router = require('./server/router');

// connect to the MongoDB database
mongoose.connect(config.database);

// start the server
const server = app.listen(config.port);
console.log('Your server is running on port ' + config.port + '.');

// set up basic middleware for all Express requests
app.use(logger('dev')); // Log requests to API using morgan

// enable CORS from client-side
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials");
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

router(app);

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
  res.send('hello world')
})
const path = require('path');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const xmlparser = require('express-xml-bodyparser');
const router = express.Router();
const port = process.env.PORT || 3000;
const parse = require('./parseXMLtoJSON');

// Define middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(xmlparser());

// Define main API route
app.use('/api', router);
require('./api')(router);

// Listen on port 3000
app.listen(port, (error) => {
  if (error) {
    console.error(error.stack);
  } else {
    console.info('==> 🌎  Listening on port %s.', port);
  }
});

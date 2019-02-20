const express = require('express');
var path = require('path');
const app = express();
var rootPath = path.normalize(__dirname);
app.use('/bootstrap', express.static(__dirname + '/node_modules/bootstrap/dist'));
app.use('/angular', express.static(__dirname + '/node_modules/angular'));
app.use('/underscore', express.static(__dirname + '/node_modules/underscore'));
app.use (express.static(rootPath + '/app'));
app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist'));
app.use('/angular-resource', express.static(__dirname + '/node_modules/angular-resource/angular-resource.js'));


const cors = require('cors') //needed for api access
const bodyParser = require('body-parser'); //needed to parse information from a get or put or post
app.use(bodyParser.json());


app.listen(8000, () => {
  console.log('Server started!');
});

const express = require('express');
var path = require('path');
const app = express();
const bodyParser = require('body-parser'); //needed to parse information from a get or put or post
var rootPath = path.normalize(__dirname);
app.use('/bootstrap', express.static(__dirname + '/node_modules/bootstrap/dist'));
app.use('/angular', express.static(__dirname + '/node_modules/angular'));
app.use('/underscore', express.static(__dirname + '/node_modules/underscore'));
app.use (express.static(rootPath + '/app'));
app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist'));
app.use('/angular-resource', express.static(__dirname + '/node_modules/angular-resource/angular-resource.js'));
app.use('/angular-route', express.static(__dirname + '/node_modules/angular-route/angular-route.js'));
app.use(bodyParser.json());

var initial_sql = require('./Database Commands/initial.js');
var con = initial_sql.con;

var crud = require('./Database Commands/crud.js')(app);
initial_sql;

app.listen(7000, () => {
  console.log('Server started!');
});

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
app.use('/angular-route', express.static(__dirname + '/node_modules/angular-route/angular-route.js'));


const cors = require('cors') //needed for api access
const bodyParser = require('body-parser'); //needed to parse information from a get or put or post
app.use(bodyParser.json());

var mysql      = require('mysql');
var con = mysql.createConnection({
  host     : 'localhost',
  port: '3306',
  user     : 'root',
  password : 'root'
});

con.connect((err) => {
  if(err){
    console.log('Error connecting to Db');
    return;
  }
  console.log('Connection established');
});

app.post('/submit',function(req,res){

var id=req.body.id;

var name=req.body.name;

var sql = "insert into circle (id, name) values ('"+id+"', '"+name+"')";

con.query(sql, function (err, result) {

if (err) throw err;

console.log("1 record inserted");

res.end();

});
});

app.listen(8000, () => {
  console.log('Server started!');
});

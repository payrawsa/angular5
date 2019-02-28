var mysql      = require('mysql');
var con = mysql.createConnection({
  host     : 'localhost',
  port: '3306',
  user     : 'root',
  password : 'root'
});

//initial connection setup DB

con.connect((err) => {
  if(err){
    console.log('Error connecting to mysql');
    return;
  }
  console.log('Connection established');

});

var create_database = "CREATE DATABASE IF NOT EXISTS blockchain";

var insert = "INSERT INTO `car_list` (`id`, `name`, `value`, `description`, `seller`, `url`) VALUES ?";

var create_table = "CREATE TABLE IF NOT EXISTS `car_list` (`id` int(11) AUTO_INCREMENT,`name` varchar(60) DEFAULT NULL,`value` varchar(20) DEFAULT NULL,`description` LONGTEXT DEFAULT NULL, `seller` varchar(50) DEFAULT NULL, `url` varchar(300) DEFAULT NULL, PRIMARY KEY (`id`))";

con.query(create_database, function (err, result) {
  if (err) {console.log("unable to create DB"); return;};
  console.log("DB blockchain created!");
});

con.query("use blockchain");

con.query(create_table, function (err, result) {
  if (err) throw err;
  console.log("Table created!");
});

var cars = require('./../JSON/cars');
var values = [];
for (var x in cars){
    values.push ([null, cars[x].name,cars[x].value,cars[x].description,cars[x].seller,cars[x].url]);

}
con.query(insert, [values], function(err, result){
    if (err){
        console.log(err);
        console.log("error inserting values")
        return;
    }
    console.log(" Number of records inserted: " + result.affectedRows);
    console.log("database is ready");
});

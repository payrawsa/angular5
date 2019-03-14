
module.exports = function(app){

app.get('/available_cars',function(req,res, next){

var car_list = "select * from car_list";

con.query(car_list, function (err, result) {

if (err) throw err;

res.json(200, result);

});
});

app.get('/users', function (req, res) {

  var user_query = "select * from user_list where userId='"+req.query.userId +"'"

  con.query(user_query, function(err,result){
  if (err) throw err;
  if(result.length && result[0].password==req.query.password ){
    res.json(200, result);
  }
  else {
    res.json(200,"");
  }
  });

});

app.post('/createUser', function (req, res) {

  var response = req.body;
  var values = [[null, response.userId, response.name, response.password, 500]];
  var user_query = "insert into `user_list` (`id`, `userId`, `name`, `password`, `balance`) values ?"

  con.query(user_query,[values], function(err){
  if (err) {res.send(200, null); return;};
  console.log("success");
  res.send(200);
  });

});


}

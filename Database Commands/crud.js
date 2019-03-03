
module.exports = function(app){

app.get('/available_cars',function(req,res, next){

var car_list = "select * from car_list";

con.query(car_list, function (err, result) {

if (err) throw err;

console.log("records successfully returned");
console.log(result);


res.json(200, result);

});
});
}

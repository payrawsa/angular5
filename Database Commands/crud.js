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

var mysql = require('mysql');
var con = mysql.createConnection({
  host: "localhost",
  user: "you",
  password: "you",
  database: "mydb"
});

con.connect(function(err) {
  
  console.log("Connected!");
  var sql = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";
  con.query(sql, function (err, result) {
    
    console.log("Table created");
  });
});

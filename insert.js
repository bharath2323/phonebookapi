var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "you",
  password: "you",
  database: "mydb"
});

con.connect(function(err) {
  
  console.log("Connected!");
  var sql = "INSERT INTO customers (name, address) VALUES ('Company Inc', 'Highway 37')";
  con.query(sql, function (err, result) {
    
    console.log("1 record inserted");
  });
});
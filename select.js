var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "you",
  password: "you",
  database: "mydb"
});

con.connect(function(err) {
  
  con.query("SELECT * FROM customers", function (err, result, fields) {
    
    console.log(result);
  });
});
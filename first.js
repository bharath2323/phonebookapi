var mysql = require('mysql'); 
var con = mysql.createConnection({
  host: "localhost",
  user: "you",
  password: "you"
});

con.connect(function(err) {

  console.log("Connected!");
});

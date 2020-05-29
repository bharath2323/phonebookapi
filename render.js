 const express=require("express")
const bodyparser = require("body-parser")
const app=express()
app.use(express.static("./")) //loads all the related html and css files
app.use(bodyparser.urlencoded({extended:false}))
const port=3000

app.set('view engine','pug')

//this gets functioned when user chooses the search by mobile option 
app.get('/',function(req,res){
res.sendFile('searchmobile.html',{root:__dirname})
})

//this gets functioned when user chooses the search by name option
app.get('/',function(req,res){
res.sendFile('searchname.html',{root:__dirname})
})

//this is the starting page of the api
app.get('/',function(req,res){
res.sendFile('index.html',{root:__dirname})
})

//making connection with an existing database
var connection=mysql.createConnection({
host:'localhost',
user:'user',
password: 'user',
database:'phonebookdb'
})
connection.connect(function(err){
if(err) throw err;
 console.log('connected')
)
 
app.post('/submitadd',function(req,res){
{
   console.log(req.body)
   var sql="insert into users values(null,'"+ req.body.name +"','"+ req.body.gender +"','"+ req.body.email +"','"+ req.body.mobilen +"')"
   connection.query(sql,function(err){ 
 if(err) throw err
 res.render('added.html')})
connection.end();
})

app.post('/submitsearchmobile',function(req,res){
{
   console.log(req.body)
   var sqls="SELECT * FROM phonebookdb WHERE mobile=req.body.mobno";
   connection.query(sqls,function(err){ 
 if(err) throw err
 res.render('added.html')})
connection.end();
})

app.post('/submitsearchname',function(req,res){
{
   console.log(req.body)
   var sqls="SELECT * FROM phonebookdb WHERE name=req.body.name";
   connection.query(sqls,function(err){ 
 if(err) throw err
 console.log(res)
connection.end();
})

app.post('/submitupdate',function(req,res){
{
   console.log(req.body)
   var sqls="UPDATE customers SET name = req.name,mobile=req.mobile,email=req.email WHERE name = req.name";
   connection.query(sqls,function(err){ 
 if(err) throw err
 res.render('added.html')})
 connection.end();
})
app.listen(port,()=>console.log("listening"))
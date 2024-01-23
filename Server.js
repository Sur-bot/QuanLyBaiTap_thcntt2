var express = require('express');
var bodyParser = require("body-parser");
const cors = require('cors');
var mysql = require('mysql2');
var app = express();
app.use(cors());
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))


//step 2:
var con = mysql.createConnection
({
    host: "localhost",
    port: "3306",
    user: "root",
    password: "15032002Abc",
    insecureAuth : true,
    database: "BookStore"
});
//step 1
    con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!!!")
});

//BooksAPI
app.get('/xemdanhsach', function (req, res) {
var sql = "SELECT * FROM books";
con.query(sql, function(err, results) {
if (err) throw err;
res.send(results);
})
})

app.get('/themsach', function (req, res) {
    var sql = "INSERT INTO books (isbn, name, price, description, pages) VALUES('000-00611200545', 'To Kill a LittleBitch', 10.00, 'A classic novel by Vanh', 126)";
    con.query(sql, function(err, results) {
    if (err) throw err;
    res.send(results);
})
})

app.get('/capnhatsach', function (req, res) {
    var sql = "UPDATE books SET name = 'Khong phai sach' WHERE price = 10.99;";
    con.query(sql, function(err, results) {
    if (err) throw err;
    res.send(results);
})
})

app.get('/xoasach', function (req, res) {
    var sql = "DELETE FROM books WHERE isbn = '000-00611200545';";
    con.query(sql, function(err, results) {
    if (err) throw err;
    res.send(results);
})
})


//AuthorsAPI
app.get('/xemtacgia', function (req, res) {
    var sql2 = "SELECT * FROM authors";
    con.query(sql2, function(err, results) {
    if (err) throw err;
    res.send(results);
})
})

app.get('/themtacgia', function (req, res) {
    var sql2 = "INSERT INTO authors (id, name, dob, avatar) VALUES(5, 'Le Van Bao Nguyen', '2002-12-24', 'alittlebitch.jpg')";
    con.query(sql2, function(err, results) {
    if (err) throw err;
    res.send(results);
})
})

app.get('/capnhattacgia', function (req, res) {
    var sql2 = "UPDATE authors SET name = 'Khong phai Nguyen' WHERE id = 5;";
    con.query(sql2, function(err, results) {
    if (err) throw err;
    res.send(results);
})
})

app.get('/xoatacgia', function (req, res) {
    var sql2 = "DELETE FROM authors WHERE id = 2";
    con.query(sql2, function(err, results) {
    if (err) throw err;
    res.send(results);
})
})

//server
var server = app.listen(5555, function () {
var host = server.address().address
var port = server.address().port
console.log("Example app listening at http://%s:%s", host, port)
})

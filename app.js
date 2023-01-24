var express = require('express')
var app = express()
var http = require('http');
var fs = require('fs');
var router = express.Router();
const {spawn} = require('child_process');
var bodyParser = require("body-parser");
const path = require('path');
const mysql = require("mysql");
const { rootCertificates } = require('tls');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const { Client } = require('pg');

dotenv.config ({
  path: './.env'
})


const publicDirectory = path.join(__dirname, './public')
app.use(express.static(publicDirectory))
app.set('view engine', 'hbs');
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());

/*app.post('/problems', function (req, res) {
  var name = req.body.entrada1 + ' ' + req.body.entrada2 + ' ' + req.body.saida;
  console.log(name);
  var dataToSend;
    // spawn new child process to call the python script
    const python = spawn('python', ['merge-invertido.py', req.body.entrada1, req.body.entrada2, req.body.saida]);
    // collect data from script
    python.stdout.on('data', function (data) {
     console.log('Pipe data from python script ...');
     dataToSend = data.toString();
    });
    // in close event we are sure that stream from child process is closed
    python.on('close', (code) => {
    console.log(`child process close all stdio with code ${code}`);
    // send data to browser
    res.send(dataToSend)
    });
});*/


//Define Routes
app.use('/', require('./routes/pages'));
app.use('/auth', require('./routes/auth'));


app.get('/problems', function(request, response){
  response.render("tela-problemas")
});

app.get('/contact', function(request, response){
  //response.sendFile(__dirname + "/public/problems.html");
});

app.get('/about', function(request, response){
  //response.sendFile(__dirname + "/public/problems.html");
});



/*const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

client.connect((error) => {
  if(error) {
    console.log(error)
  } else {
    console.log("MYSQL CONNECTED!")
  }
});*/

const PORT = process.env.PORT || 8080
var server = app.listen(PORT, function () {
  console.log('Node server is running..');
});   




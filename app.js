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


//Define Routes
app.use('/', require('./routes/pages'));
app.use('/auth', require('./routes/auth'));




const PORT = process.env.PORT || 8080
var server = app.listen(PORT, function () {
  console.log('Node server is running..');
});   




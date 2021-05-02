const mysql = require('mysql');
const chalk = require('chalk');
require("dotenv").config();
let connection;
//Heroku connection
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else {

const mysql = require('mysql');
const chalk = require('chalk');
require("dotenv").config();
let connection;
//This is the Heroku Connection
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else {
//This is the connection to local host
connection = mysql.createConnection({
    host: process.env.DB_HOST || '127.0.0.1',
    port: process.env.DB_PORT || "3306",
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "Password69",
    database: process.env.DB || "burgers_db"
  });
}
connection.connect(function (err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log(chalk.bgGreenBright.black("connected as id " + connection.threadId));
  });
  
  module.exports = connection;
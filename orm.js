const connection = require('./connection');
const util = require('util');
const chalk = require('chalk');
 
const queryAsync = util.promisify(connection.query).bind(connection);
const orm = {
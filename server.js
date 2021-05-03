//All my variables here at the top for the server
const express = require("express");
const path=require('path');
require("dotenv").config();
const PORT = process.env.PORT || 8080;
const app = express();
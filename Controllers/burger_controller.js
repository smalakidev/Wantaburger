const express = require('express');
const burger = require('../models/burger');
const router = express.Router();
const chalk = require('chalk');

//This selects all the values from the burger table
router.get("/", function (req, res) {
    try {
        return burger.selectAll("burger").then(function (data) {
            var hbsObject = {
                burger: data
            };
            res.render("index", hbsObject);
        });
    }
    catch
    {
        console.log(chalk.yellowBright.black("error"));
    }
});
const orm = require('../config/orm');
const chalk = require('chalk');
const burger = {
        //Select all the records from burger table
        selectAll: async function (table) {
                try {
                        const result = await orm.selectAll(table);
                        return (result);
                }
                catch
                {
                        console.log(chalk.yellowBright.black("error"));
                }
        },
        
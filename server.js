const inquirer = require('inquirer');
const mysql = require('mysql');
const fs = require('fs');

// Connect to mySQL
const connection = mysql.createConnection({
    host: 'localhost',

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: 'root',

    // Your password
    password: 'Flopsy75',
    database: 'employeetracker_db',
});

connection.connect((err) => {
    if (err) {
        throw err;
    } else {
        initialPrompt();
    }
});


function initialPrompt() {
    inquirer.prompt([
        {
            type: "list",
            message: "What would you like to do?",
            choices: ['A', 'B', 'C', 'D', 'E'],
            name: "startPrompt"
        }
    ]).then((answer) => {
        switch (answer.action) {
            case 'A':
                findEmployee();
                break;

            case 'B':
                addEmployee();
                break;

            case 'Exit':
                connection.end();
                break;

            default:
                console.log(`The following action: ${answer.action} is invalid`);
                break;
        }
    });
};

// Thursday 13th May class for getting MySQL data
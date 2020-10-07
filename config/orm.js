const connection = require("../../connection");


const orm = selectAll + insertOne + updateOne + deleteOne;

orm();

function selectAll() {
    connection.query("SELECT * FROM burgers", function(err, res) {
        if (err) throw err;
        console.log(res);
    });
};


function insertOne() {
    connection.query("INSERT INTO burgers SET ?", function(err, res) {
        if (err) throw err;
        console.log(res);
    });
}

function updateOne() {
    connection.query("UPDATE burgers SET ? WHERE ? ", function(err, res) {
        if (err) throw err;
        console.log(res);
    });
}


function deleteOne() {
    connection.query("DELETE FROM burgers WHERE ? ", function(err, res) {
        if (err) throw err;
        console.log(res);
    });
}


modules.exports = connection;

// function viewDepartments() {
//     console.log("All departments...\n");
//     connection.query("SELECT * FROM department", function(err, res) {
//         if (err) throw err;
//         // Log all results of the SELECT statement
//         console.table(res);
//         start();
//     });
// }
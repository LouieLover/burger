const connection = require("../../connection");


const orm = {

};





selectAll();

insertOne();

updateOne();

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
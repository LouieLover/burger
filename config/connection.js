const mysql = require("mysql");
var connection
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "127.0.0.1",

        // Your port; if not 3306
        port: 3300,

        // Your username
        user: "root",

        // Your password
        password: "1234",
        database: "burgers"
    });
}


connection.connect(function(err) {
    if (err) throw err;


});

module.exports = connection;
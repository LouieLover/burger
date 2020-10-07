const orm = require("../../orm");

const burger = selectAll + insertOne + updateOne + deleteOne;

burger();

function selectAll() {
    connection.query("SELECT * FROM burgers", function(err, res) {
        if (err) throw err;
        console.log(res);
    });
}


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



modules.export = orm.js;
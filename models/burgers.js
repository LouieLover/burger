var orm = require("../config/orm");

var burgers = {
    all: function(cb) {
        orm.all("burgers", function(res) {
            cb(res);
        });
    },
    // The variables cols and vals are arrays.
    insertOne: function(cols, vals, cb) {
        orm.create("burgers", cols, vals, function(res) {
            cb(res);
        });
    },
    updateOne: function(objColVals, condition, cb) {
        orm.update("burgers", objColVals, condition, function(res) {
            cb(res);
        });
    },
    deleteOne: function(condition, cb) {
        orm.delete("burgers", condition, function(res) {
            cb(res);
        });
    }
};


// const burgers = selectAll + insertOne + updateOne + deleteOne;

// // burgers();

// function selectAll() {
//     connection.query("SELECT * FROM burgers", function(err, res) {
//         if (err) throw err;
//         console.log(res);
//     });
// }


// function insertOne() {
//     connection.query("INSERT INTO burgers SET ?", function(err, res) {
//         if (err) throw err;
//         console.log(res);
//     });
// }

// function updateOne() {
//     connection.query("UPDATE burgers SET ? WHERE ? ", function(err, res) {
//         if (err) throw err;
//         console.log(res);
//     });
// }


// function deleteOne() {
//     connection.query("DELETE FROM burgers WHERE ? ", function(err, res) {
//         if (err) throw err;
//         console.log(res);
//     });
// }



module.exports = burgers;
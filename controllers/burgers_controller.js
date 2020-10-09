const express = require("express");
const router = express.Router();


const burgers = require("../models/burgers");


router.get("/", function(req, res) {
    burgers.all(function(data) {
        const hdbrsOBJ = {
            burgers: data
        };
        console.log(hdbrsOBJ);
        res.render("index", hdbrsOBJ);
    });

    router.post("/api/burgers", function(req, res) {
        burgers.insertOne(
            ["burger_name", "devoured"], [req.body.burger_name, req.body.devoured],
            function(results) {
                res.json({ id: results.insertId });
            }
        );
    });
    router.put("/api/burgers/:id", function(req, res) {
        const condition = "id = " + req.params.id;
        console.log("condition", condition);
        burgers.updateOne({ devoured: req.body.devoured }, condition, function(results) {
            if (results.changedRows === 0) {
                return res.status(404).end();
            } else {
                res.status(200).end();
            }

        });
    });
    router.delete("/api/burgers/:id", function(req, res) {
        const condition = "id = " + req.params.id;
        console.log("condition", condition);
        burgers.deleteOne(condition, function(results) {
            console.log(results);
            if ((results.affectedRows === 0)) {
                return res.status(404).end();
            } else {
                res.status(200).end();
            }
        });
    });
});

module.exports = router;
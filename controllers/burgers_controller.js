const express = require("express");
const burgers = require("burgers");
const router = express.Router();

router.get("/", function(req, res) {
    burgers.selectAll(function(data) {
        const hdbrsOBJ = {
            burgers: data
        };
        console.log(hdbrsOBJ);
        res.render("index", hdbrsOBJ);
    });

    router.post("/api/burgers", function(req, res) {
        burgers.insertOne(
            ["burger_name", "devoured"], [req.body.burger_name, req, body, devoured],
            function(results) {
                res.json({ id: results.insertId });
            }
        );
    });
    router.put("/api/burgers/:id", function(req, res) {
        const condition = "id = " + req.id;
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
        const condition = "id = " + req.id;
        console.log("condition", condition);
        burgers.deleteOne(condition, function(results) {
            if ((results.changedRows === 0)) {
                return res.status(404).end();
            } else {
                res.status(200).end();
            }
        });
    });
});
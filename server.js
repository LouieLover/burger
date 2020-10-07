const express = require("express");
const exphbs = require("express-handlebars");
const router = require("./controllers/burgers_controller");
const app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
const PORT = process.env.PORT || 3300;

app.use(express.static("public"));

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(router);






app.listen(PORT, function() {
    console.log("Server listening on: http:/localhost:" + PORT);
});
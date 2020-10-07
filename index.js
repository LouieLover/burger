const express = require("express");
const exphbs = require("express-handlebars");

const app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
const PORT = process.env.PORT || 8080;

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

const routes = require("../controllers/burgers_controller.js");
app.use(routes);




app.listen(PORT, function() {
    console.log("Server listening on: http:/localhost:" + PORT);
});
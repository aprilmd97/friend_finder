
var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT||8080;


//middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); 

require(path.join(__dirname, "./app/data/routing/htmlRoutes"))(app);
require(path.join(__dirname, "./app/data/routing/apiRoutes"))(app); // dependency injection...


app.listen(PORT, function(){
    console.log("App listening on PORT " + PORT)
});

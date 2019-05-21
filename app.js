var express = require("express");
var app 	= express();

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

app.get("/", function(req, res){
    res.render("index");
});

app.get("/bubblechart", function(req, res){
    res.render("bubble");
});


//tell express to listen for requests
app.listen(process.env.PORT || 3000, function(){
    console.log("d3 server has started")
});
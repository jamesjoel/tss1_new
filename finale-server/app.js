var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var cors = require("cors");
var routes = require("./includes/routes");

app.use(express.static(__dirname+"/assets"));
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(cors());

//localhost:3000
app.get("/", (req, res)=>{
    res.sendFile(__dirname+"/index.html");
})

app.use(routes);


app.listen(3000, ()=>{
    console.log("server running");
})
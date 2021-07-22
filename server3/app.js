var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var fileupload = require("express-fileupload");
var cors = require("cors");

app.use(express.static(__dirname+"/assets"));

app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded())
app.use(fileupload());

// localhost:3000/api/upload
app.post("/api/upload", (req, res)=>{
    // console.log(req.files);
    var file = req.files.image;
    file.mv(__dirname+"/assets/images/"+file.name, (err)=>{
        console.log("---------------------");
        res.send({ path : "http://localhost:3000/images/"+file.name });
    })
})


app.listen(3000, ()=>{
    console.log("server running");
})
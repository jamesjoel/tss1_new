var express = require("express");
var app = express();
var MongoClient = require("mongodb").MongoClient;
var bodyParser = require("body-parser");
var sha1 = require("sha1");
var cors = require("cors");

app.use(cors());
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.post("/api/admin/login", (req, res)=>{
    var u = req.body.username;
    var p = sha1(req.body.password);
    MongoClient.connect("mongodb://localhost:27017", (err, con)=>{
        var db = con.db("tss12");
        db.collection("admin").find({ username : u }).toArray((err, result)=>{
            if(result.length == 0) // username incorrect
            {
                res.status(401).json({ type : 1});
            }
            else
            {
                if(result[0].password == p) // username and password correct
                {
                    res.status(200).json({ type : 3});
                }
                else // username correct but password incorrect
                {
                    res.status(401).json({ type : 2});
                }
            }
        })
    })
})
/*
    20X ---- OK (success)
        200
        201
        202
        203
        204

    40X   ----- Error
        401   --- unauthorized
        402  --- payment
        403
        404

*/





app.listen(3000, ()=>{
    console.log("server running");
})
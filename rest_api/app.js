var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var MongoClient = require("mongodb").MongoClient;
var mongo = require("mongodb");
var cors = require("cors");

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(cors());

var mongoUrl = "mongodb://localhost:27017";

app.get("/api/student", (req, res)=>{
    MongoClient.connect(mongoUrl, (err, con)=>{
        var db = con.db("tss12");
        db.collection("student").find().toArray((err, result)=>{
            res.send(result);
        })
    })
})

app.get("/api/student/:id", (req, res)=>{
    var objid = mongo.ObjectId(req.params.id);
    MongoClient.connect(mongoUrl, (err, con)=>{
        var db = con.db("tss12");
        db.collection("student").find({ _id : objid}).toArray((err, result)=>{
            res.send(result);
        })
    })
})


app.post("/api/student", (req, res)=>{
    MongoClient.connect(mongoUrl, (err, con)=>{
        var db = con.db("tss12");
        db.collection("student").insertOne(req.body, (err, result)=>{
            res.send(result);
        })
    })
})


app.delete("/api/student/:id", (req, res)=>{
    var id = req.params.id;
    var objid = mongo.ObjectId(id);
    MongoClient.connect(mongoUrl, (err, con)=>{
        var db = con.db("tss12");
        db.collection("student").removeOne({ _id : objid }, (err, result)=>{
            res.send(result);
        })
    })
})


app.put("/api/student/:id", (req, res)=>{
    var objid = mongo.ObjectId(req.params.id);
    MongoClient.connect(mongoUrl, (err, con)=>{
        var db = con.db("tss12");
        db.collection("student").updateOne(req.body, { $set : { _id : objid }}, (err, result)=>{
            res.send(result);
        })
    })
})

app.listen(3000, ()=>{
    console.log("server running");
})


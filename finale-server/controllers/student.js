var express = require("express");
var routes = express.Router();
var MongoClient = require("mongodb").MongoClient;
var mongodb = require("mongodb");
var database = require("../config/database");
// localhost:3000/api/student
routes.get("/", (req, res)=>{
    MongoClient.connect(database.dbUrl, (err, con)=>{
        var db = con.db(database.dbName);
        db.collection("student").find().toArray((err, reulst)=>{
            res.send(reulst);
        })
    })
})

routes.post("/", (req, res)=>{
    
})

routes.delete("/:id", (req, res)=>{
    
})

routes.put("/:id", (req, res)=>{
    
})

module.exports=routes;
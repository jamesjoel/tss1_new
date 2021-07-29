var express = require("express");
var routes = express.Router();

routes.use("/api/student", require("../controllers/student"));
// routes.use("/api/teachers", require("../controllers/teachers"));

module.exports=routes;
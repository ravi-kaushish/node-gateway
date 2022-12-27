const express = require("express");
const router = express.Router();

//Importing Handlers
const { Gateway } = require("../controllers/gateway.js");
const { Resolver } = require("../middlewares/resolver.js");

//Defining Routes
router.all("/:service/*", Resolver, Gateway);

module.exports = router;